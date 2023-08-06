async function deleteFormHandler(event) {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.delete-post').forEach((button) => {button.addEventListener('click', deleteFormHandler)});