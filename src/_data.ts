import { v4 as uuidv4 } from 'uuid'

const MAILS = [
  {
    id: 'inbox',
    title: 'Входящие',
    messages: [
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
    ],
    bookmark: false,
    selected: true,
  },
  {
    id: 'sent',
    title: 'Отправленные',
    messages: [
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
    ],
    bookmark: false,
    selected: false,
  },
  {
    id: 'drafts',
    title: 'Черновики',
    messages: [
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
    ],
    bookmark: false,
    selected: false,
  },
  {
    id: 'deleted',
    title: 'Удалённые',
    messages: [
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
    ],
    bookmark: false,
    selected: false,
  },
  {
    id: 'spam',
    title: 'Спам',
    messages: [
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
        isRead: true,
      },
      {
        id: uuidv4(),
        name: 'Person Name',
        email: 'person@email.ru',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quas assumenda aliquid, sapiente similique labore, dolor voluptatum dolore, et quasi perferendis officia fuga quos deserunt architecto a pariatur. Cumque, rerum!',
        date: '21.05.2022',
      },
    ],
    bookmark: false,
    selected: false,
  },
]

export default MAILS
