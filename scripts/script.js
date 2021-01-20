class Twitter{
  constructor({listElem}) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem)
    }
  }

  renderPost() { //то что будет рендерится на страницу
    
  }

  showUserPost() { //чтобы откривались посты только нашего пользователя
    
  }
  showLikesPost() {
    
  }

  showAllPost() {
  
  }

  openModal() {
    
  }

}


class Posts{
  constructor({posts=[]}={}) {//если не будет значения то будет созданна переменная с именем posts и с пустым масивом[]
    this.posts = posts;
  }
  addPost(tweet) {
    /* const post = new Post(tweet); // можно так написать
    this.posts.push(post); */
    this.posts.push(new Post(tweet));
  }
  deletePost(id) {
    
  }
  likePost(id) {
    
  }
}


class Post {
  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.postDate = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }
  changeLike() {  //прибавляем лайк и отнимаем лайк //их нужно гдето хранить!!
    this.liked = !this.liked;
    if (this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter('.tweet-list');      // сюда передаем клас с штмл страници можно обьектомсо сложной структурой , а можно стррокой

twitter.tweets.addPost({
    id:'654',
    userName:'Tanya',
    nickName:'Tatyana',
    postDate:'20.01.2021',
    text:'adia twitter',
    img:'',
    likes:'50',
    liked: true,
})
  
 console.log('twitter:', twitter);