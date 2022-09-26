import Route from '@ember/routing/route';

export default Route.extend({
    // beforeModel(){
    //     let users = [{
    //       first_name: 'aaa',
    //       last_name: 'aa',
    //       email: 'aaa@gmail.com',
    //       team: 'Freshteam1',
    //       image : 'images/avatar.png',
    //       joiningDate: '2020-07-01'
    //     }, {
    //       first_name: 'bbb',
    //       last_name: 'bb',
    //       email: 'bbb.r@gmail.com',
    //       team: 'Freshteam2',
    //       image:'',
    //       joiningDate: '2019-07-03'
    //     }, {
    //       first_name: 'ccc',
    //       last_name: 'cc',
    //       email: 'ccc@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-04'  
    //     }, {
    //       first_name: 'ddd',
    //       last_name: 'dd',
    //       email: 'ddd@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-05'
    //     }, {
    //       first_name: 'eee',
    //       last_name: 'ee',
    //       email: 'eee@gmail.com',
    //       team: 'Freshteam1',
    //       image:'',
    //       joiningDate: '2020-07-06'
    //     }, {
    //       first_name: 'fff',
    //       last_name: 'ff',
    //       email: 'fff@gmail.com',
    //       team: 'Freshteam2',
    //       image: '',
    //       joiningDate: '2020-07-01'
    //     }, {
    //       first_name: 'ggg',
    //       last_name: 'gg',
    //       email: 'ggg@gmail.com',
    //       team: 'Freshteam2',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'hhh',
    //       last_name: 'hh',
    //       email: 'hhh@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-05'
    //     }, {
    //       first_name: 'iii',
    //       last_name: 'ii',
    //       email: 'iii@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'jjj',
    //       last_name: 'jj',
    //       email: 'jjj@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-07'
    //     }, {
    //       first_name: 'hhh',
    //       last_name: 'hh',
    //       email: 'hhh@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-09'
    //     }, {
    //       first_name: 'kkk',
    //       last_name: 'kk',
    //       email: 'kkk@gmail.com',
    //       team: 'Freshteam1',
    //       image:'',
    //       joiningDate: '2020-07-22'
    //     }, {
    //       first_name: 'lll',
    //       last_name: 'll',
    //       email: 'lll@gmail.com',
    //       team: 'Freshteam2',
    //       image:'',
    //       joiningDate: '2020-07-23'
    //     }, {
    //       first_name: 'mmm',
    //       last_name: 'mm',
    //       email: 'mmm@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-24'
    //     }, {
    //       first_name: 'nnn',
    //       last_name: 'nn',
    //       email: 'nnn@gmail.com',
    //       team: 'Freshteam4',
    //       image:'',
    //       joiningDate: '2020-07-22'
    //     }, {
    //       first_name: 'ppp',
    //       last_name: 'pp',
    //       email: 'ppp@gmail.com',
    //       team: 'Freshteam3',
    //       image:'',
    //       joiningDate: '2020-07-25'
    //     }, {
    //       first_name: 'qqq',
    //       last_name: 'qq',
    //       email: 'qqq@gmail.com',
    //       team: 'Freshteam1',
    //       image:'',
    //       joiningDate: '2020-07-28'
    //     }]; // Add more data here

    
      
    //     users.forEach((user) => {
    //       let userRecord = this.store.createRecord('user', user);
    //       userRecord.save();
    //     });
    // }
      model(){
          
        return this.store.findAll('user') ;
        

    }
});