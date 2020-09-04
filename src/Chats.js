import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="Chats">
            <Chat
                name="Sasha"
                message="Hey!"
                time="55 minutes"
                picture="https://img.ohmymag.com/s3/fromm/1024/insolite/default_2019-12-11_94210735-a354-41c2-a307-d756896c426b.jpeg"
            />
            <Chat
                name="Emilie"
                message="Comment cava ?"
                time="3 minutes"
                picture="https://www.cache-cache.fr/dw/image/v2/BCHM_PRD/on/demandware.static/-/Sites-Cache_cache_master/default/dwf90bcf55/pull-manches-longues-cotele-bleu-marine-femme-dc-36125336630730499.jpg?sw=702&sh=702"
            />
            <Chat
                name="Josie"
                message="Como hestas?"
                time="15 minutes"
                picture="https://entrepotdelalunette.com/pub/media/catalog/category/femme_optique.jpg"
            />
            <Chat
                name="Katie"
                message="Hello"
                time="30 minutes"
                picture="https://i.pinimg.com/originals/c3/0c/ee/c30cee036f03ee365f0aec223be490b7.jpg"
            />
            <Chat
                name="Catarina"
                message="Hi"
                time="40 minutes"
                picture="https://adorelenses.com/438/lentilles-contact-couleur-dare-hazel.jpg"
            />
        </div>
    )
}

export default Chats
