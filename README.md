# Google Sheets Clone

A web application built with **Next.js**, **TailwindCSS**, and **Sanity.io** that mimics the layout and functionalities of Google Sheets. This project allows users to:

- Display multiple sheets using tabs at the bottom.
- Show the content of selected sheets in a read-only mode.
- Import real Excel sheets (.xlsx files) into the app.
- Manage and store sheet data dynamically using Sanity.io.

## Features

### Tabs for Sheets
- Represents all sheets in the project.
- Tabs are displayed at the bottom of the interface for easy navigation.

### Top Menu
- Placeholder for future options and actions.
- Provides a clean interface for global controls.

### Read-Only Sheet Viewer
- Displays data from the selected sheet in a tabular format.
- Renders data dynamically and efficiently using TailwindCSS for styling.

### Excel Import Functionality
- Allows users to upload `.xlsx` files.
- Parses the Excel file and stores the sheets in Sanity.io.
- Automatically renders the imported data in the app.

## Tech Stack

- **Next.js**: Framework for building the frontend with server-side rendering.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Sanity.io**: Backend CMS for managing sheet data.
- **xlsx**: JavaScript library for parsing and handling Excel files.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- npm (>= 6.x)
- Sanity CLI (`npm install -g @sanity/cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/google-sheets-clone.git
   cd google-sheets-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Sanity Studio:
   ```bash
   npx sanity init --coupon clever
   ```
   - Select a clean template.
   - Connect to your Sanity project or create a new one.

4. Create a `.env.local` file for your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the app at [http://localhost:3000](http://localhost:3000).

## Usage

### Importing an Excel Sheet
1. Click on the "Upload" button in the top menu.
2. Select a `.xlsx` file from your computer.
3. The file will be parsed, and sheets will appear as tabs.

### Viewing Sheets
- Use the tabs at the bottom to navigate between sheets.
- Data from the selected sheet is displayed in the main content area.

## Project Structure

```
.
├── public
├── src
│   ├── app
│   │   ├── globals.css      # Global TailwindCSS styles
│   │   ├── layout.tsx       # Layout component
│   │   └── page.tsx         # Main page
│   ├── components           # React components (Tabs, SheetViewer, etc.)
│   ├── lib
│   │   └── sanity.js        # Sanity client configuration
│   └── pages
│       └── api
├── tailwind.config.js        # TailwindCSS configuration
├── sanity
│   ├── schemas
│   │   └── sheet.js         # Schema for sheet data
│   └── sanity.json          # Sanity configuration
└── README.md
```

## Project Implementation Possibilities (PIPs)

### Phase 1: Core Enhancements
1. **Editable Sheets**: Implement editing capabilities for sheet data.
2. **Row/Column Resizing**: Allow dynamic resizing of rows and columns.
3. **Cell Formatting**: Add options for bold, italic, underline, and cell background colors.
4. **Data Validation**: Support data validation (e.g., dropdowns, number ranges).
5. **Sheet Deletion**: Add functionality to delete existing sheets.

### Phase 2: Advanced Features
6. **User Authentication**: Integrate user login/signup with OAuth.
7. **Real-Time Collaboration**: Enable multiple users to edit sheets simultaneously.
8. **Export Functionality**: Allow users to export sheets to `.xlsx` or `.csv` formats.
9. **Version History**: Add the ability to track and restore previous versions of a sheet.
10. **Custom Themes**: Allow users to apply light/dark mode and custom themes.

### Phase 3: Integrations
11. **Google Sheets Import**: Provide a feature to directly import Google Sheets via API.
12. **Third-Party Integrations**: Support integrations with Zapier, Slack, or other services.
13. **Analytics Dashboard**: Create a dashboard showing sheet usage and statistics.
14. **Mobile Optimization**: Improve responsiveness and usability on mobile devices.
15. **Webhooks**: Enable webhooks to notify users about updates or changes.

### Phase 4: Scalability and Performance
16. **Database Optimization**: Improve database queries for faster data retrieval.
17. **Pagination**: Implement pagination for large datasets.
18. **Lazy Loading**: Load sheets and data on demand to reduce initial load time.
19. **Offline Mode**: Allow users to work offline and sync changes later.
20. **Server-Side Rendering (SSR)**: Optimize SSR for better performance and SEO.

## Contributing

Contributions are welcome! If you have ideas or improvements, feel free to:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Sanity.io](https://www.sanity.io/)
- [xlsx](https://github.com/SheetJS/sheetjs)

---

Happy coding! 🚀

