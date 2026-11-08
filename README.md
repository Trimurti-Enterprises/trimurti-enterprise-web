# Business Website Template Editor — Product Requirements

**Project:** Trimurti Enterprises business-site template editor  
**Project URL:** https://lovable.dev/projects/d37dad6b-18d1-467d-8db2-4f2b9cd5678e  
**Document status:** Product direction and requirements; current implementation is distinguished from planned capabilities below.

## 1. Product summary

Create a focused, easy-to-use editor that helps small businesses in construction equipment and related vendor categories produce a credible website without starting from a blank page. The editor should provide a repeatable structure while allowing each business to express its own brand, services, equipment, work, and contact details.

This is a template editor, not a full website-building platform. Its main deliverable is a lightweight, standalone HTML website that can be saved and hosted separately from the editor.

## 2. Users and needs

- **Primary users:** Owners or staff at construction-equipment suppliers, crane and machinery vendors, rental businesses, and similar businesses.
- **Need:** Quickly create a clear, professional business website without needing to design pages or write code.
- **Need:** Reuse a familiar structure while changing the wording, images, colors, and content to fit each individual vendor.
- **Need:** Preview the result before exporting a portable website.

## 3. Core concepts: pages and sections

These terms describe different levels of the website and should not be used interchangeably.

- **Page:** A navigable destination in the website, such as Home, About, Services or Equipment, Projects, and Contact. Pages appear as navigation links and can contain their own content.
- **Section:** A content block placed within a page. Sections can be used on Home, About, Services, or another page; they are not pages by themselves. Examples include an introduction, service summary, equipment grid, project highlights, company facts, testimonials, and a contact callout.

For example, a Home page might contain an introduction, featured equipment, and a contact callout. An About page might contain company history and capabilities. A Services page might contain service descriptions and machinery categories.

The editor should let a business choose and arrange pages, then choose and arrange suitable sections within each page. Content types such as Projects, Equipment, and Contact should be reusable page or section content options as appropriate—not fixed substitutes for the general concept of a section.

## 4. Product goals

1. Make it straightforward to create a business website from a useful starting structure.
2. Support multiple vendors in a similar industry without making their sites look identical.
3. Keep page and section organization understandable to non-technical users.
4. Show edits in a live preview so the user can see the resulting site as they customize it.
5. Export a standalone website with its styles, scripts, and selected images included where possible, without requiring the editor to run it.

## 5. Scope

### In scope

- Business identity and brand customization.
- A small set of visual starting styles suitable for the target business category.
- Website pages and reusable content sections, with editable content and ordering.
- A live website preview.
- Export of the generated website as a lightweight, portable HTML file.
- Responsive presentation for common desktop and mobile screen sizes.

### Out of scope for this focused product

- A general-purpose drag-and-drop website design system.
- User accounts, hosted website management, or a server-side publishing platform.
- A database-backed contact submission service in the exported site.
- Arbitrary custom code editing or a complex plugin marketplace.

## 6. Functional requirements

### 6.1 Business identity and brand

The user can set the business name, logo, primary headline, short description, contact details, and brand colors. The editor should reflect these values in both the preview and exported site. Image selection should be available for the logo and relevant website content.

### 6.2 Pages and navigation — planned capability

- The user can select which common pages to include, using generic names and structures suitable for similar vendors.
- The user can order the pages and provide page-specific titles and content.
- Navigation links correspond to the selected pages and lead to the correct page in the generated website.
- The starting experience may provide sensible suggested pages, but should not force every vendor into identical page content.

### 6.3 Sections within pages — planned capability

- The user can add, remove, and reorder sections within each page independently.
- Available section types are reusable content patterns, not page names. A section can be placed on any suitable page.
- Each section has editable content appropriate to its type, such as headings, descriptions, images, equipment details, project highlights, or contact prompts.
- The editor offers category-relevant defaults while allowing vendors to omit irrelevant content and tailor the details.
- The preview updates to match section selection, order, and edited content.

### 6.4 Visual styles

The user can choose among a small number of coherent layout directions and set brand colors. The styles should share the same underlying content structure while producing visibly different presentations.

### 6.5 Preview and export

- The user can preview the generated website while making changes.
- Export creates a standalone HTML file with embedded styles and scripts, plus selected image assets embedded where practical.
- The exported site does not include the editor interface or depend on the editor runtime.
- Exported navigation and interactive elements work in the saved file. Image portability and successful export should be checked before presenting the file as fully self-contained.

### 6.6 Contact experience

The generated site can display the vendor's contact details and an enquiry form. The form should validate the required name and message fields and require at least one reply method: email or mobile number. In the current client-side approach, enquiry submission may open the visitor's email application; database storage or server-side delivery is not part of this product scope unless separately approved.

## 7. Quality requirements

- The editor and generated site are usable on desktop and mobile screens.
- Labels and controls make the distinction between pages and sections clear.
- The generated website remains lightweight and usable without loading the editor.
- User-provided text is safely rendered in the generated HTML.
- Form validation gives understandable feedback and does not accept a submission without either an email address or a mobile number.
- The preview and exported output represent the same selected pages, sections, order, branding, and content.

## 8. Current implementation snapshot

The following describes the editor represented in the project today; it is not a claim that all planned requirements are complete.

- **Implemented:** Business name, headline, short description, logo upload, email, phone, and address fields.
- **Implemented:** Two editable brand colors and three visual starting styles: Field notes, Workshop, and Modern.
- **Implemented:** A live preview and an export action that generates an HTML file with inline styles and script.
- **Implemented in a limited form:** A fixed set of About, Projects, Equipment, and Contact choices, with editable text for the selected content.
- **Implemented in a limited form:** The equipment presentation uses a fixed set of sample machines rather than a vendor-editable catalogue.
- **Not yet represented by the current controls:** User-managed website pages and independently configurable, reusable sections within each page. The existing About, Projects, Equipment, and Contact choices behave more like top-level content destinations than general section blocks.
- **Export limitation to verify:** The exporter attempts to embed available local images; any image that cannot be fetched may remain a path reference, so portability is not guaranteed for every asset.
- **Contact limitation:** The exported form is client-side and prepares an email; it does not save enquiries to a database.

## 9. Acceptance criteria

The product direction is met when:

1. A user can identify and edit pages separately from the sections inside those pages.
2. A user can include a section on Home, About, Services, or another suitable page without treating that section as a separate page.
3. A user can select and order relevant pages and sections, and edit their content for a particular vendor.
4. Two vendors can use the same starting template while changing branding, page and section choices, content, images, and visual style enough for their sites to feel individually tailored.
5. The live preview reflects the current selection and content, and the exported site matches it.
6. The downloaded HTML works independently of the editor, with its selected image assets available in the exported site.
7. The enquiry form requires a name and message, and accepts either email or mobile as the reply method.

## 10. Open questions and dependencies

- Which additional vendor types beyond construction-equipment businesses should the initial section library support?
- Should the first release export one long page with anchored navigation, multiple HTML pages, or support both?
- Which section types and editable fields should be included in the first reusable library?
- Should a later version add persistent project saving, enquiry storage, or hosted publishing? These require scope beyond the current client-side editor.
- Which equipment and project images should be available as starter content, and should users be able to manage multiple images per item?

## 11. Current technology

The editor is a client-side application built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. No backend is currently part of the documented product scope.
