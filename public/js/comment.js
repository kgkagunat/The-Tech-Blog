async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment_text').value.trim();
    const comment_textarea = document.querySelector('#comment_text'); // Store the textarea in a variable

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
            comment_textarea.value = ''; // Clear the textarea after form submission
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
