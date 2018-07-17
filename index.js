import uuid from uuid;

const EDIT_COMMENT = 'EDIT_COMMENT',
    ADD_COMMENT = 'ADD_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT';
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: 'content',
    id: uuid.v4()
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: comment.id
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text: '',
    id: comment.id
  }
}

function thumbUpComment(value) {
  return {
    type: THUMB_UP_COMMENT.
    value: +1,
    id: comment.id
  }
}

function thumbDownComment(value) {
  return {
    type: THUMB_DOWN_COMMENT,
    value: -1,
    id: comment.id
  }
}






//sending an creator

dispatch(addComment('new comment!'));
dispatch(addComment('next new comment!'));

//function for creating and dispatching an acction

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('new comment!');
boundAddComment('next new comment!');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(5);

const boundEditComment = (id, text) => dispatch(editComment(id, text));
boundEditComment(5, 'this is edited comment');

const boundThumbUpComment = value => disptach(thumbUpComment(value));
boundThumbUpComment(+1);

const boundThumbDownComment = value => disptach(thumbDownComment(value));
boundThumbDownComment(-1);