// Class untuk tugas
class Task {
    constructor(text, deadline) {
      this.text = text;
      this.deadline = deadline;
    }
  }
  
  // Ambil elemen DOM
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const deadlineInput = document.getElementById('deadlineInput');
  const taskList = document.getElementById('taskList');
  const emptyMessage = document.getElementById('emptyMessage');
  
  // Tampilkan atau sembunyikan pesan kosong
  const checkIfEmpty = () => {
    emptyMessage.style.display = taskList.children.length === 0 ? 'block' : 'none';
  };
  
  // Format tanggal jadi format lokal
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Tidak ada deadline';
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  // Buat elemen tugas
  const createTaskElement = (text, deadline) => {
    const li = document.createElement('li');
    li.className =
      'flex items-center justify-between bg-gray-50 px-4 py-2 rounded-xl shadow-sm hover:bg-green-50 transition-all group';
  
    const formattedDeadline = formatDate(deadline);
    const deadlineDisplay = deadline ? `Deadline: ${formattedDeadline}` : 'Tidak ada deadline';
  
    li.innerHTML = `
      <div class="flex-1">
        <div class="flex items-start gap-3">
          <input type="checkbox" class="mt-1 w-5 h-5 accent-green-500 peer" />
          <div class="flex flex-col">
            <span class="task-text break-words break-all peer-checked:line-through peer-checked:text-gray-400 transition-all">
              ${text}
            </span>
            <span class="task-deadline text-sm text-gray-500" data-deadline="${deadline}">
              ${deadlineDisplay}
            </span>
          </div>
        </div>
      </div>
      <button class="edit-btn text-blue-400 hover:text-blue-600 invisible group-hover:visible transition-all">✎</button>
      <button class="delete-btn ml-4 text-red-400 hover:text-red-600 invisible group-hover:visible transition-all">✕</button>
    `;
  
    // Event tombol hapus
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
      checkIfEmpty();
      saveTasksToStorage();
    });
  
    // Event tombol edit
    li.querySelector('.edit-btn').addEventListener('click', () => {
      const textSpan = li.querySelector('.task-text');
      const deadlineSpan = li.querySelector('.task-deadline');
  
      const currentText = textSpan.textContent.trim();
      const currentDeadline = deadlineSpan.getAttribute('data-deadline');
  
      const newText = prompt('Edit tugas:', currentText);
      const newDeadline = prompt('Edit deadline (YYYY-MM-DD):', currentDeadline);
  
      if (newText !== null) {
        textSpan.textContent = newText;
  
        const updatedFormatted = formatDate(newDeadline);
        deadlineSpan.textContent = newDeadline ? `Deadline: ${updatedFormatted}` : 'Tidak ada deadline';
        deadlineSpan.setAttribute('data-deadline', newDeadline || '');
  
        saveTasksToStorage();
      }
    });
  
    taskList.appendChild(li);
    checkIfEmpty();
  };
  
  // Simpan ke localStorage
  const saveTasksToStorage = () => {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach((li) => {
      const text = li.querySelector('.task-text')?.textContent.trim();
      const deadline = li.querySelector('.task-deadline')?.getAttribute('data-deadline') || '';
      tasks.push(new Task(text, deadline));
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Muat dari localStorage
  const loadTasksFromStorage = async () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Simulasi delay load (misalnya dari server)
    await new Promise(resolve => setTimeout(resolve, 300)); // 300ms
  
    tasks.forEach(task => createTaskElement(task.text, task.deadline));
  };
  
  
  // Submit form
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const text = taskInput.value.trim();
    const deadline = deadlineInput.value;
  
    if (!text) return;
  
    createTaskElement(text, deadline);
    saveTasksToStorage();
  
    taskInput.value = '';
    deadlineInput.value = '';
  });
  
  loadTasksFromStorage();
  
