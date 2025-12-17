const form=document.getElementById('leadForm');
if(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('Réservation ECHOA.I');
    const body=encodeURIComponent(
      'Nom: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\nMessage:\n'+data.get('message')
    );
    window.location.href='mailto:echoai37@gmail.com?subject='+subject+'&body='+body;
  });
}
