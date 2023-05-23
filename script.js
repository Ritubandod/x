

            var bodyElements = document.querySelectorAll('body > *');
            for (var i = 0; i < bodyElements.length; i++) {
                bodyElements[i].style.display = 'none';
            }

            // Create the custom content
            var customContent = document.createElement('div');
            customContent.id = 'custom-content';
            customContent.innerHTML = '<h1>Welcome to Custom HTML Content!</h1><p>This is a sample text.</p>';

            // Append the custom content to the body
            document.body.appendChild(customContent);
       
