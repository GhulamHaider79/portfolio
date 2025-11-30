import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiPlus, FiTrash2, FiEdit, FiSettings, FiMail, FiGrid } from "react-icons/fi";
import { db, auth } from "../firebase/firebase"; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

export default function Admin() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [view, setView] = useState("dashboard");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", repo: "", live: "" });

  // Load projects & messages from Firebase
  useEffect(() => {
  const projectsCol = collection(db, "projects");
  const messagesCol = collection(db, "messages");

  // Real-time listener for projects
  const unsubscribeProjects = onSnapshot(projectsCol, snapshot => {
    setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });

  // Real-time listener for messages
  const unsubscribeMessages = onSnapshot(messagesCol, snapshot => {
    setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  });

  // Clean up listeners on unmount
  return () => {
    unsubscribeProjects();
    unsubscribeMessages();
  };
}, []);


  const openAddModal = () => {
    setEditingProject(null);
    setForm({ title: "", description: "", repo: "", live: "" });
    setModalOpen(true);
  };

  const saveProject = async () => {
    if (!form.title.trim()) return alert("Title is required");

    try {
      if (editingProject) {
        const projectRef = doc(db, "projects", editingProject.id);
        await updateDoc(projectRef, { ...form });
        setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...form } : p));
      } else {
        const docRef = await addDoc(collection(db, "projects"), {
          ...form,
          createdAt: serverTimestamp()
        });
        setProjects([{ id: docRef.id, ...form, createdAt: new Date().toISOString() }, ...projects]);
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Check console.");
    }
  };

  const editProject = (p) => {
    setEditingProject(p);
    setForm({ title: p.title, description: p.description, repo: p.repo, live: p.live });
    setModalOpen(true);
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      setProjects(projects.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const clearMessages = async () => {
    if (!confirm("Clear all messages?")) return;
    try {
      const msgsSnap = await getDocs(collection(db, "messages"));
      msgsSnap.forEach(async m => {
        await deleteDoc(doc(db, "messages", m.id));
      });
      setMessages([]);
    } catch (error) {
      console.error("Error clearing messages:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex">
        <aside className={`bg-white border-r transition-all duration-300 ${openSidebar ? "w-64" : "w-16"}`}>
          <div className="h-20 flex items-center px-4 border-b">
            <button className="p-2 rounded hover:bg-gray-100" onClick={() => setOpenSidebar(!openSidebar)}>
              <FiMenu size={20} />
            </button>
            {openSidebar && <h1 className="ml-3 text-lg font-semibold">Portfolio Admin</h1>}
          </div>

          <nav className="p-3 space-y-1">
            <NavItem label="Dashboard" icon={<FiGrid />} collapsed={!openSidebar} onClick={() => setView("dashboard")} active={view==="dashboard"} />
            <NavItem label="Projects" icon={<FiPlus />} collapsed={!openSidebar} onClick={() => setView("projects")} active={view==="projects"} />
            <NavItem label="Messages" icon={<FiMail />} collapsed={!openSidebar} onClick={() => setView("messages")} active={view==="messages"} />
            <NavItem label="Settings" icon={<FiSettings />} collapsed={!openSidebar} onClick={() => setView("settings")} active={view==="settings"} />
          </nav>

          <div className="mt-auto p-3 text-xs text-gray-500">v1.0 • Firebase-powered</div>
        </aside>

        <main className="flex-1 p-6">
          <Header onAdd={openAddModal} />

          <div className="mt-6">
            <AnimatePresence mode="wait">
              {view === "dashboard" && (
                <motion.div key="dash" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <Dashboard projects={projects} messages={messages} />
                </motion.div>
              )}
              {view === "projects" && (
                <motion.div key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                  <ProjectsView projects={projects} onEdit={editProject} onDelete={deleteProject} />
                </motion.div>
              )}
              {view === "messages" && (
                <motion.div key="messages" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                  <MessagesView messages={messages} onClear={clearMessages} />
                </motion.div>
              )}
              {view === "settings" && (
                <motion.div key="settings" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  <SettingsView />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6" initial={{ scale: 0.97 }} animate={{ scale: 1 }} exit={{ scale: 0.97 }}>
              <h3 className="text-xl font-semibold mb-4">{editingProject ? "Edit Project" : "Add Project"}</h3>
              <div className="space-y-3">
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full p-2 border rounded" />
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Short description" rows={4} className="w-full p-2 border rounded" />
                <input value={form.repo} onChange={(e) => setForm({ ...form, repo: e.target.value })} placeholder="Repository URL" className="w-full p-2 border rounded" />
                <input value={form.live} onChange={(e) => setForm({ ...form, live: e.target.value })} placeholder="Live URL (optional)" className="w-full p-2 border rounded" />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button className="px-4 py-2 rounded border" onClick={() => setModalOpen(false)}>Cancel</button>
                <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={saveProject}>{editingProject ? "Save" : "Add Project"}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// -------------------- Components --------------------

function Header({ onAdd }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin11201"); // redirect to login page
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-sm text-gray-500">Manage portfolio projects, messages and settings.</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onAdd} className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded hover:opacity-95">
          <FiPlus /> <span>Add Project</span>
        </button>
      </div>

      <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded hover:opacity-95"
        >
          Logout
        </button>
    </div>
  );
}

function Dashboard({ projects, messages }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <h4 className="text-sm text-gray-500">Projects</h4>
        <div className="text-2xl font-bold">{projects.length}</div>
      </Card>

      <Card>
        <h4 className="text-sm text-gray-500">Messages</h4>
        <div className="text-2xl font-bold">{messages.length}</div>
      </Card>

      <Card>
        <h4 className="text-sm text-gray-500">Last Update</h4>
        <div className="text-2xl font-bold">{projects[0] ? new Date(projects[0].createdAt.seconds * 1000).toLocaleString() : "—"}</div>
      </Card>
    </div>
  );
}

function ProjectsView({ projects, onEdit, onDelete }) {
  return (
    <div className="space-y-4">
      {projects.length === 0 && <div>No projects yet.</div>}
      {projects.map(p => (
        <motion.div key={p.id} className="p-4 bg-white border rounded flex justify-between">
          <div>
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-600">{p.description}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(p)}>Edit</button>
            <button onClick={() => onDelete(p.id)} className="text-red-600">Delete</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MessagesView({ messages, onClear }) {
  return (
    <div>
      <button onClick={onClear}>Clear All</button>
      {messages.map(m => (
        <div key={m.id} className="p-4 border rounded">
          <div>{m.name} ({m.email})</div>
          <div>{m.message}</div>
        </div>
      ))}
    </div>
  );
}

function SettingsView() {
  return <div className="p-4 bg-white border rounded">Settings placeholder</div>;
}

function Card({ children }) {
  return <div className="p-4 bg-white border rounded">{children}</div>;
}

function NavItem({ label, icon, collapsed, onClick, active }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 p-3 rounded hover:bg-gray-50 ${active ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}>
      <div className="text-lg">{icon}</div>
      {!collapsed && <div>{label}</div>}
    </button>
  );
}
