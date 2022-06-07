// create a submit button to send a comment to the page
$('#submit').on('click', function () {
    $('.error').remove()
    //check to see if all the input fields have something in them
    if ($('#userName').val() === '') {
      $('#output').append('<p class="error">Display Name required</p>');
    } else if ($('#comment').val() === '') {
      $('#output').append('<p class="error">A comment is required</p>');
    } else {
      // create the post
      $('#comments').prepend(`
        <div>
          <div class="post">
            <div class="profileImage">
              <img src="basicGuy.png">
            </div>
            <div class="topStuff">
            <p>${$('#comment').val()}<p>
            <h5>${$('#userName').val()}</h5>
              <div class="edit">edit</div>
              <div class="editCommentCSS noDisplay">
                <input id="editCommentForever" placeholder="Edit Comment">
                <div id="editSubmit">Submit</div>
              </div>
              <div class="delete">delete</div>
          </div>
          </div>
        </div>
          `)
    }
  })
  $('#comments').on('click', '.edit', function () {
    let editComment = $(this).next();
    if ($(editComment).hasClass('noDisplay')) {
      $(editComment).removeClass('noDisplay');
    } else {
      $(editComment).addClass('noDisplay');
    }
  });
  $('#comments').on('click', '.delete', function () {
    let deleteThisPost = $(this).parents()[1];
    $(deleteThisPost).remove();
  });
  $('#comments').on('click', '#editSubmit', function () {
    let editComments = $(this).parents()[2];
    let deleteOldMessage = $(editComments).children()[1];
    let pleaseWork = $(deleteOldMessage).children()[0];
    let moreEditing = $(this).parents()[0];
    let evenMoreEditing = $(moreEditing).children()[0];
    $(pleaseWork).text($(evenMoreEditing).val());
    let getRidOfEdit = $(this).parents()[0];
    $($(getRidOfEdit)).addClass('noDisplay');
  });