# 🚀 React + Tailwind Css WordPress Starter Pack!

**Created by Aymen Boukhatem - Yaxii Dev**

## 🎉 What's This?

An insanely easy way to add modern React apps to your WordPress plugins! Stop wrestling with WordPress admin styles and forget about complex build setups - this starter pack handles the messy stuff so you can focus on building cool features.

## ✨ Features

- 💅 **NextUI Components** - Beautiful, accessible UI right out of the box
- 🎭 **Framer Motion** - Add slick animations with minimal effort
- 🌊 **Tailwind CSS** - Style without fighting WordPress admin CSS
- ⚛️ **React 18** - All the modern React goodness
- 🔄 **Hot Reloading** - See changes instantly while developing

## 🚀 Getting Started

### Step 1: Copy The Files

```bash
# Copy this folder to your plugin
cp -r react-app your-plugin/
cd your-plugin/react-app

# Clean up things you don't need
rm -rf src/testing
rm TESTING.md
rm src/components/Example.jsx
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Add The Menu Page

Add this to your plugin's PHP (adjust to your naming conventions):

```php
// In your plugin's main file
if (is_admin()) {
    require_once plugin_dir_path(__FILE__) . 'includes/class-your-react-admin.php';
    new Your_React_Admin();
}
```

Create the admin class:

```php
<?php
// includes/class-your-react-admin.php
class Your_React_Admin {
    public function __construct() {
        add_action('admin_menu', array($this, 'add_menu_page'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
    }

    public function add_menu_page() {
        add_menu_page(
            'Your React App',           // Page title
            'Your React App',           // Menu title
            'manage_options',           // Capability
            'your-react-app',           // Menu slug
            array($this, 'render_app'), // Callback function
            'dashicons-admin-customizer',// Icon (pick your favorite!)
            25                          // Menu position
        );
    }

    public function render_app() {
        echo '<div class="wrap">';
        echo '<h1>' . esc_html(get_admin_page_title()) . '</h1>';
        echo '<div id="my-react-app" class="my-react-app-container"></div>';
        echo '</div>';
    }

    public function enqueue_assets($hook) {
        // Only load on our page
        if ('toplevel_page_your-react-app' !== $hook) {
            return;
        }

        // Load React (WP already has it!)
        wp_enqueue_script('wp-element');

        // Get versions from file timestamps
        $js_path = plugin_dir_path(dirname(__FILE__)) . 'react-app/build/index.js';
        $css_path = plugin_dir_path(dirname(__FILE__)) . 'react-app/build/index.css';

        // Load our stuff
        wp_enqueue_style(
            'your-react-app',
            plugin_dir_url(dirname(__FILE__)) . 'react-app/build/index.css',
            [],
            file_exists($css_path) ? filemtime($css_path) : time()
        );

        wp_enqueue_script(
            'your-react-app',
            plugin_dir_url(dirname(__FILE__)) . 'react-app/build/index.js',
            ['wp-element'],
            file_exists($js_path) ? filemtime($js_path) : time(),
            true
        );

        // Send data to React
        wp_localize_script(
            'your-react-app',
            'myReactAppData',
            [
                'ajaxUrl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('your-react-nonce'),
                'restUrl' => rest_url(),
                'restNonce' => wp_create_nonce('wp_rest'),
                'currentPage' => 'your-react-app'
            ]
        );
    }
}
```

### Step 4: Build It!

```bash
# For development (watches for changes)
npm run dev

# For production
npm run wp-build
```

## 🎨 Start Building!

Your React code lives in `src/components/`  
Main app component is in `src/components/App.jsx`  
Styles are in `src/styles/index.css`

Need data from WordPress? Use:

```js
const { ajaxUrl, nonce, restUrl } = window.myReactAppData;
```

### 🧩 Using Next UI Components

```jsx
import { Button, Card, Input } from '@nextui-org/react';

// Then in your component:
<Button color="primary">Click Me!</Button>
<Card>
  <CardBody>
    <p>This is a NextUI card</p>
  </CardBody>
</Card>
```

### ✨ Add Animations

```jsx
import { motion } from "framer-motion";

// Make things move!
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  I fade and slide in!
</motion.div>;
```

## 🧠 Pro Tips

- **WordPress Data**: Access via `window.myReactAppData`
- **REST API**: `fetch(window.myReactAppData.restUrl + 'wp/v2/posts')`
- **AJAX**: Use `window.myReactAppData.ajaxUrl` for `admin-ajax.php` requests
- **Live Reloading**: Keep `npm run dev` running while you work

## ⚠️ Troubleshooting

- **Styles Not Working?** Check if WordPress admin styles are not overriding yours
- **Components Not Loading?** Check the console for errors
- **Data Not Available?** Make sure `wp_localize_script` is set up correctly

## 🥳 Have Fun Building!

Now go make something awesome!

**Made with ❤️ by Aymen Boukhatem**
