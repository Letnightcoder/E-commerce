# E-commerce Storefront

This is a modern, full-stack e-commerce application built with Next.js and TypeScript. It features a product catalog, detailed product pages, a shopping cart, and filtering capabilities.

**🔗 [Live Demo](https://e-commerce-beta-puce.vercel.app/)**

## Features

- **Product Catalog:** Browse a grid of all available products.
- **Dynamic Product Pages:** View detailed information for each product, including descriptions, pricing, and customer reviews.
- **Shopping Cart:** Add, remove, and update quantities of items in the cart.
- **Checkout Simulation:** A "Proceed to Checkout" button that clears the cart and shows a success notification.
- **Search & Filtering:** (Infrastructure in place) Sidebar for filtering products by category, brand, and price.
- **Static Site Generation:** Product pages are statically generated for optimal performance using Next.js's `generateStaticParams`.
- **Responsive Design:** The UI is fully responsive and works on all screen sizes.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API for cart state.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v18 or later) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed on your system.

### Installation

1.  Clone the repository to your local machine:

    ```sh
    git clone <repository-url>
    ```

2.  Navigate into the project directory:

    ```sh
    cd project
    ```

3.  Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `project/app/`: Contains all the routes and pages of the application.
  - `project/app/product/[id]/`: Dynamic route for individual product pages.
  - `project/app/cart/`: The shopping cart page.
- `project/components/`: Shared React components used across the application (e.g., Header, Footer, ProductCard).
  - `project/components/ui/`: UI components from shadcn/ui.
- `project/contexts/`: React context providers, such as `CartContext`.
- `project/lib/`: Utility functions and data definitions.
  - `project/lib/data.ts`: Static product data.
  - `project/lib/types.ts`: TypeScript type definitions.
- `project/public/`: Static assets like images and fonts.
