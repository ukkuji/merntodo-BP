db.auth('root', 'czTGg54Epu')

db = db.getSiblingDB('todos')

db.createUser({
  user: 'admin',
  pwd: 'danmerasahina',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
