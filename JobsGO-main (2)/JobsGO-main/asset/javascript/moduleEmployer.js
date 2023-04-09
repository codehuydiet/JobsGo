//-------------------------- QUẢN LÝ ĐĂNG BÀI TUYỂN DỤNG ---------------------------------------------------
document.addEventListener('DOMContentLoaded', function showPostForm() {
    var BtnPost = document.querySelector('#post-btn');
    var postForm = document.querySelector('.modal-post');
    var btnClose = document.querySelector('.modal-close');
    BtnPost.addEventListener('click', function () {
        postForm.style = "visibility:active";
    })

    btnClose.addEventListener('click', function () {
        postForm.style = "visibility:hidden";
    });
});

// -------------------- Khi nhấn đăng xuất ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function logout () {
    var btnlogout = document.getElementById('btn-logout');
    btnlogout.addEventListener('click', function show() {
        var configrmation = document.querySelector('.modal-logout-container');
        configrmation.style = "visibility: active";
    })

    var btnNo = document.querySelector('#btnNo')
    btnNo.addEventListener('click', function hideLogoutConfirmation() {
        var confirmation = document.querySelector('.modal-logout-container');
        confirmation.style = 'visibility: hidden';
    })

    var btnYes = document.querySelector('#btnYes');
    btnYes.addEventListener('click', logout)
    function logout() {
        window.location.href = "index.html"
    }
});

//------------------Thay đổi trạng thái hoạt động của doanh nghiệp-------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    var selectionStatus = document.getElementById("switch-status");
    var statusOn = document.getElementById('status-name-on');
    var statusOff = document.getElementById('status-name-off');
    selectionStatus.addEventListener('click', function () {
        if (selectionStatus.checked == true) {
            statusOff.style.display = 'none';
            statusOn.style.display = 'inline';
        } else {
            statusOff.style.display = 'inline';
            statusOn.style.display = 'none';
        }
    })
});
//------------------------------Chuyển đổi form khi chọn list các chức năng----------------------------------
function hiddenForm(){
    var EmployerForm = document.querySelector('.information-Employer')
    var AccountForm = document.querySelector('.information-account-form');
    var chanePassForm = document.querySelector('.changePassword-form');
    var listPostForm = document.getElementsByClassName('post-management-form');
    var CandidateForm = document.getElementsByClassName('list-candidate-form');

    AccountForm.style.display = 'none';
    chanePassForm.style.display = "none";
    listPostForm[0].style.display = "none";
    CandidateForm[0].style.display = "none";
    EmployerForm.style.display = "none";
}
var EmployerForm = document.querySelector('.information-Employer')
var AccountForm = document.querySelector('.information-account-form');
var chanePassForm = document.querySelector('.changePassword-form');
var listPostForm = document.getElementsByClassName('post-management-form');
var CandidateForm = document.getElementsByClassName('list-candidate-form');

//Dùng DOM để giải quyết vấn đề click 2 lần mới có sự kiện xảy ra
document.addEventListener('DOMContentLoaded', function ConvertForm () {

    // Click chọn thông tin doanh nghiệp
    var clickInforEmployer = document.querySelector('#btn-employer');
    clickInforEmployer.addEventListener('click', function () {
        hiddenForm();
        EmployerForm.style.display = "block";
    })

    //  Click chọn thông tin tài khoản
    var btnInforAccount = document.querySelector('#js-infor-account');
    btnInforAccount.addEventListener('click', function () {
        hiddenForm();
        AccountForm.style.display = 'block';
    });

    // Chọn form đổi mật khẩu
    var btnChangePass = document.querySelector('#js-change-password');
    btnChangePass.addEventListener('click', function () {
        hiddenForm();
        chanePassForm.style.display = "block";
    });

    //Click chọn Danh sách các JOB
    var btnListJobs = document.getElementById('js-btn-list-jobs');
    btnListJobs.addEventListener('click', function () {
        hiddenForm();
        listPostForm[0].style.display = "block";

    })

    //Click chọn danh sách các ứng viên
    var btnCandidate = document.getElementById('js-btn-candidate');
    btnCandidate.addEventListener('click',function(){
        hiddenForm();
        CandidateForm[0].style.display = "block";
    })
});

//-------------------------------------------- KHÓA - MỞ BÀI VIẾT---------------------------------------------- 
document.addEventListener('DOMContentLoaded', function () {
    var btnLockPost = document.getElementById('btn-lock');
    var iconOpen = document.querySelector('#js-post-open');
    var iconLock = document.querySelector('#js-post-lock');
    btnLockPost.addEventListener('click', function () {
        if (iconLock.style.display == "none") {
            iconOpen.style.display = "none"
            iconLock.style.display = "inline"
        } else {
            iconOpen.style.display = "inline"
            iconLock.style.display = "none"
        }
    })
});

//----------------------------------- Nhấn vào logo trở về page-home --------------------------------
window.onload =  function () {
    var backHome = document.querySelector("#back-home");
    backHome.addEventListener('click',function(){
        window.location.href = "index.html";
    })
}