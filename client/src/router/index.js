import { createRouter, createWebHistory } from 'vue-router';
import BooksPath from '../components/BooksPath.vue';
import AddBook from '../components/AddBook.vue';
import UpdateBook from '../components/UpdateBook.vue';
import DeleteBook from '../components/DeleteBook.vue';
import NotFound from '../components/NotFound.vue';


const routes = [
  {
    path: '/books/list',
    name: 'Books',
    component: BooksPath,
  },
  {
    path: '/books/addbook',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/books/addbook/add',
    name: 'AddBookAction',
    component: AddBook,
  },
  {
    path: '/books/update',
    name: 'UpdateBook',
    component: UpdateBook,
  },
  {
    path: '/books/update/:id',
    name: 'UpdateBookAction',
    component: UpdateBook,
  },
  {
    path: '/books/delete',
    name: 'DeleteBook',
    component: DeleteBook,
  },
  {
    path: '/books/delete/:id',
    name: 'DeleteBookAction',
    component: DeleteBook,
  },
  
  {
    path: '/:catchAll(.*)',
    redirect: '/NotFound',
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
