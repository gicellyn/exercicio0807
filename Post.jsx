import { useState } from "react";

function Post() {
    const [like, setLike] = useState(false);
    
    return(
        <section>
            <h2>Lorem Ipsum</h2>
            <p>dolor sit amet consectetur adipisicing elit. Fugiat vero, voluptas sequi odio assumenda nihil numquam, labore, vitae nulla tempora est ullam at omnis a qui dolor deserunt incidunt fuga.</p>
            <button onClick={() => setLike(!like)}>Curtir</button>
            {like && <p>Você curtiu este post!</p>}
        </section>
    )
}

export default Post;