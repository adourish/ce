
Knowledge Console Chrome Extension by Anthony Dourish

## WORK INPROGRESS. 

Probably a powerful tool that allows users to interact with notes, tasks, calendar, and AI chat applications using a terminal console interface. This extension provides a convenient and efficient way to manage your daily activities and stay organized, right from your Chrome browser.

Features
Terminal Console Interface: The extension provides a terminal console interface within the Chrome browser, giving users a familiar and efficient way to interact with the various applications.

Notes App: Take and manage notes directly from the terminal console. Create, edit, and delete notes with simple commands.

Tasks App: Stay organized by managing your tasks using the terminal console. Create tasks, mark them as complete, and set due dates.

Calendar App: Keep track of your schedule with the integrated calendar. View, create, and modify events using the terminal console.

AI Chat App: Engage in conversational interactions with an AI chatbot right from the terminal console. Get assistance, ask questions, and receive helpful responses.

Dashboard: The extension creates a centralized dashboard that seamlessly integrates the various applications. Switch between apps easily using simple commands.

Installation
To install the Knowledge Console Chrome Extension, follow these steps:

# Build
- Download node from nodejs.org and install
- mkdir projects
- cd projects
- git clone -b develop https://github.com/adourish/ce.git
- cd ce
- npm install
- npm run build or npm run start 
- open chrome and go to extensions
- enable developer mode
- Click load unpacked
- Select your folder projects/ce/build
- 

Usage
Once the extension is installed, you can access the terminal console dashboard by clicking on its icon in the Chrome toolbar.

Commands
The terminal console supports the following commands:

notes - Launches the Notes App.
tasks - Launches the Tasks App.
calendar - Launches the Calendar App.
chat - Launches the AI Chat App.
help - Displays the available commands and their usage.
Notes App
The Notes App allows you to create, edit, and manage your notes using the terminal console.

Command usage:

notes create <title> <content> - Creates a new note with the specified title and content.
notes edit <noteId> <content> - Edits the content of the note with the specified ID.
notes delete <noteId> - Deletes the note with the specified ID.
notes list - Lists all the notes.
Tasks App
The Tasks App helps you stay organized by managing your tasks using the terminal console.

Command usage:

tasks create <taskName> [dueDate] - Creates a new task with the specified name and optional due date.
tasks complete <taskId> - Marks the task with the specified ID as complete.
tasks delete <taskId> - Deletes the task with the specified ID.
tasks list - Lists all the tasks.
Calendar App
The Calendar App allows you to view, create, and modify events using the terminal console.

Command usage:

calendar view <date> - Displays the events for the specified date.
calendar create <date> <title> - Creates a new event with the specified date and title.
calendar edit <eventId> <title> - Edits the title of the event with the specified ID.
calendar delete <eventId> - Deletes the event with the specified ID.
AI Chat App
The AI Chat App provides a

---
Forked from chrome extension boiletplate rate. So glad I found this. I really hate creating this boiler plate stuff. Fantastic job, two thumbs up.

- [Github](https://github.com/lxieyang/chrome-extension-boilerplate-react)
- Michael Xieyang Liu
- [Website](https://lxieyang.github.io)
