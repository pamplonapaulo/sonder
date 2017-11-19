$(document).ready(function (){
   
    $('#viaje').on('click', function (e) {
       e.preventDefault();
        
        $('.menu').attr('style', 'background-image: url(assets/menu-bg-viaje-2.png)');
        
        $('.mobile').attr('src', 'assets/mobile-viaje.png');
        
        $('.txt').html('Viaje Viaje Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam voluptas a excepturi labore. Iusto dignissimos molestiae.');        
    });
    
    $('#conheca').on('click', function (e) {
       e.preventDefault();
        
        $('.menu').attr('style', 'background-image: url(assets/menu-bg-conheca-2.png)');
        
        $('.mobile').attr('src', 'assets/mobile-conheca.png'); 
                     
        $('.txt').html('Conheça e troque experiências com pessoas do mundo todo, saiba em que balada os seus amigos estão e compartilhe fotos e informações em um feed com uma rede de contatos.'); 
        
    });    
    
    $('#explore').on('click', function (e) {
       e.preventDefault();
        
        $('.menu').attr('style', 'background-image: url(assets/menu-bg-explore-2.png)');
        
        $('.mobile').attr('src', 'assets/mobile-explore.png');
        
        $('.txt').html('Reserve hotéis, compre passagens  e planeje toda a sua viagem com nossas dicas e listas dentro do app. Reserve hotéis, compre passagens  e planeje toda a sua viagem com nossas dicas e listas dentro do app.');
        
    });    
    
    
    
    
    
    
});