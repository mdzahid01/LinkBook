# Writing the full updated CSS code into three separate files for the user:
# 1. index.css
# 2. App.css
# 3. ContactModal.css

index_css = """
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --primary-color: #007bff;
  --secondary-bg: #f0f0f0;
  --border-color: #e0e0e0;
  --card-bg: #ffffff;
  --input-bg: #f8fafc;
  --hover-bg: #eaeaea;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --primary-color: #0d6efd;
  --secondary-bg: #2d2d2d;
  --border-color: #444;
  --card-bg: #2c2c2c;
  --input-bg: #3b3b3b;
  --hover-bg: #444;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

.header, .footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.8rem;
  background-color: var(--primary-color);
}

.footer {
  justify-content: center;
  font-size: 1.2rem;
}

.dark-mode-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.dark-mode-icon:hover {
  transform: scale(1.1);
}

/* Small mobile phones */
@media (max-width: 756px) {
  .header, .footer {
    font-size: 1rem;
  }

  .dark-mode-icon {
    width: 30px;
    height: 30px;
  }

  .btn {
    font-size: 0.8rem;
    padding: 0.3rem;
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .span-email {
    font-size: 0.8rem;
  }
}

/* Responsive layout placeholders */
@media (max-width: 767px) {}
@media (max-width: 1024px) {}
@media (max-width: 1280px) {}
@media (min-width: 1281px) {}
"""

app_css = """
.contact-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-width: 90vw;
  max-width: 50%;
  margin-right: auto;
  margin-left: auto;
  gap: 0.3rem;
}

.contact-body {
  position: relative;
  height: 4rem;
  display: flex;
  background-color: var(--card-bg);
  min-width: 90vw;
  max-width: 50%;
  border-radius: 5px;
  margin: auto;
  color: var(--text-color);
  font-size: 1.8rem;
  padding: 0.1rem 2rem;
  cursor: pointer;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.contact-body:hover {
  background-color: var(--hover-bg);
  transform: scale(1.01);
}

.contact-checkbox {
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.credential-container {
  display: flex;
  flex-direction: column;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1rem;
}

.icon-delete {
  background-color: transparent;
  border: none;
}

.icon:hover {
  transform: scale(1.2);
}

.icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: all 0.2s ease;
}

.span-email {
  font-size: 1rem;
  color: var(--text-color);
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.contact-list-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: 2.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  margin: auto;
  flex-direction: row;
  gap: 1rem;
}

.btn-add-new {
  font-size: 1.5rem;
}

.search-bar, .category-select {
  padding: 8px 5px;
  border-radius: 5px;
  outline-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 1.2rem;
  background-color: var(--input-bg);
  color: var(--text-color);
}

option:hover {
  background-color: var(--primary-color);
  color: black;
}

.no-contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 2rem auto 0 auto;
  cursor: pointer;
  flex-direction: column;
  gap: 1rem;
  min-width: 90vw;
  max-width: 50%;
  height: 70vh;
}

/* Mobile View */
@media screen and (max-width: 768px) {
  .contact-list-header {
    font-size: 2rem;
    gap: 1rem;
  }

  .search-bar, .category-select {
    font-size: 0.9rem;
    width: 100%;
    margin: 0.5rem auto;
  }

  .category-select {
    width: 60%;
  }

  .contact-body {
    height: 3rem;
    font-size: 1.2rem;
    padding: 0.5em 1rem;
    width: 390px;
  }

  .span-name, .span-email {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;
    font-size: 0.8rem;
  }

  .span-name {
    font-size: 1rem;
  }

  .btn {
    font-size: 1.6rem;
    padding: 0.3rem;
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .span-email {
    font-size: 0.6rem;
  }

  .icon-container, .icon-delete {
    gap: 0.3rem;
  }
}
"""

contact_modal_css = """
.overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease-out;
}

.modal {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  padding: 2rem;
  animation: slideUp 0.3s ease-out;
}

.modal h2 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.modal input,
.modal select {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--text-color);
  transition: all 0.2s ease;
}

.modal input:focus,
.modal select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.modal select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.modal-buttons button {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-buttons button[type='submit'] {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.modal-buttons button[type='submit']:hover {
  background-color: #0056b3;
}

.modal-buttons button[type='button'] {
  background-color: var(--input-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.modal-buttons button[type='button']:hover {
  background-color: var(--hover-bg);
}

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: -1rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0.8;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .modal {
    padding: 1.5rem;
  }

  .modal-buttons {
    flex-direction: column-reverse;
    gap: 0.8rem;
  }

  .modal-buttons button {
    width: 100%;
  }
}
"""

# Saving them as files
with open("./index.css", "w") as f:
    f.write(index_css)

with open("./App.css", "w") as f:
    f.write(app_css)

with open("./ContactModal.css", "w") as f:
    f.write(contact_modal_css)


