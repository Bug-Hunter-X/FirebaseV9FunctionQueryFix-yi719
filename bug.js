const query = query(collection(db, 'users'), where('uid', '==', user.uid));

//Error: Error: Function Query is not defined