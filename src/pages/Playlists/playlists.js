const playlists = [ // vetor de objetos, cada um uma playlist, a qual tera uma propriedade vetor de musicas
    {
        id: 1,
        nome: 'Rock Classics',
        capa: '/img/beatlessmaller.webp',
        musicas: [
            {
                id: 1,
                nome: 'Sweet Child O Mine',
                arquivo: '/tracks/GunsNRoses-SweetChildOMine.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Bohemian Rhapsody',
                arquivo: '/tracks/Queen-BohemianRhapsody.mp3' // pegar um arquivo de audio
            }
        ]
    },
    {
        id: 2,
        nome: 'Top Hits',
        capa: '/img/tophits.jpg',
        musicas: [
            {
                id: 1,
                nome: 'Let it be',
                arquivo: '/tracks/LetItBe.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Dont Let Me Down',
                arquivo: '/tracks/TheBeatles-DontLetMeDown.mp3' // pegar um arquivo de audio
            }
        ]
        
    },
    {
        id: 3,
        nome: 'Jazz',
        capa: '/img/armstrong.jpg',
        musicas: [
            {
                id: 1,
                nome: 'John Coltrane - In A Sentimental Mood',
                arquivo: '/tracks/JohnColtrane-InASentimentalMood.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'I Fall In Love Too Easily',
                arquivo: '/tracks/IFallInLoveTooEasily.mp3' // pegar um arquivo de audio
            }
        ]
    },
    {
        id: 4,
        nome: 'O Melhor da Bossa Nova',
        capa: '/img/bossanova.png',
        musicas: [
            {
                id: 1,
                nome: 'Garota De Ipanema',
                arquivo: '/tracks/GarotaDeIpanema.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Chega De Saudade',
                arquivo: '/tracks/ChegaDeSaudade.mp3' // pegar um arquivo de audio
            }
        ]
    },
    {
        id: 5,
        nome: 'Lofi',
        capa: '/img/rsz_1lofi.png',
        musicas: [
            {
                id: 1,
                nome: 'Lindecis - Soulful',
                arquivo: '/tracks/Lindecis-Soulful.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'RUDE - Eternal Youth',
                arquivo: '/tracks/RUDE-EternalYouth.mp3' // pegar um arquivo de audio
            }
        ]
    },
    {
        id: 6,
        nome: 'MPB',
        capa: '/img/timmaia.jpg',
        musicas: [
            {
                id: 1,
                nome: 'Ela Partiu',
                arquivo: '/tracks/TimMaia-ElaPartiu.mp3' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Alucinacao',
                arquivo: '/tracks/Alucina????o-ApenasumRapazLatinoAmericano.mp3' // pegar um arquivo de audio
            }
        ]
    },
    {
        id: 7,
        nome: 'Workout',
        capa: './img/workout.jpg',
        musicas: [
            {
                id: 1,
                nome: 'Let it be',
                arquivo: './tracks/LetItBe.m4a' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Dont Let Me Down',
                arquivo: 'm1.mp3' // pegar um arquivo de audio
            }
        ]
    },{
        id: 8,
        nome: 'Cl??ssica',
        capa: './img/classic.jpeg',
        musicas: [
            {
                id: 1,
                nome: 'Let it be',
                arquivo: './tracks/LetItBe.m4a' // pegar um arquivo de audio
            },
            {
                id: 2,
                nome: 'Dont Let Me Down',
                arquivo: 'm1.mp3' // pegar um arquivo de audio
            }
        ]
    }
]

export default playlists;