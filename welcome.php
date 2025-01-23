<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <?php
        // Get all directories in the root that start with "option"
        $directories = array_filter(glob('option*'), 'is_dir');

        foreach ($directories as $dir) {
            // Extract the folder name for display
            $displayName = ucfirst(str_replace('option', 'Option ', $dir));
            echo "
                <div class='option' onclick=\"navigateTo('$dir')\">
                    <iframe src='./$dir/index.html' class='iframe-preview'></iframe>
                    <div class='overlay'>$displayName</div>
                </div>
            ";
        }
        ?>
    </div>
    <script>
        function navigateTo(option) {
            window.location.href = `./${option}/`; /* Navigate to the folder */
        }
    </script>
</body>
</html>
