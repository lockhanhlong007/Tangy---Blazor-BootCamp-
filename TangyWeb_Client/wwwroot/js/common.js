window.ShowToastr = (type, message) => {
    if (type === 'success') {
        toastr.success(message, 'Operation Successful', { timeOut: 5000 })
    }
    if (type === 'error') {
        toastr.error(message, 'Operation Failed', { timeOut: 5000 })
    }
}
window.ShowSwal = (type, message) => {
    if (type === 'success') {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message
        })
    }
    if (type === 'error') {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: message
        })
    }
}

function ShowDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('show');
}

function HideDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('hide');
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}