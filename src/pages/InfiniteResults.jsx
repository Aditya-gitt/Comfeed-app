import React from "react";
import axiosInstance from "../axios";
// import Result from "../components/Result";
// import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../components/Post";
// import { Container } from "../components/styles/Container.styled";

class InfiniteResults extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            chats: [],
            hasMore: true,
            offset: 0,
            limit: 10,
        };
        window.onscroll = () => {
            // console.log("Yeah its working.");
            const {
                loadchats,
                state: { error, loading, hasMore },
            } = this;
            if (error || loading || !hasMore) return;
            // if (
            //     document.documentElement.scrollHeight -
            //         document.documentElement.scrollTop ===
            //     document.documentElement.clientHeight
            // )
            if (
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight &&
                hasMore
            ) {
                loadchats();
                // you're at the bottom of the page
            }
            // {
            //     // call some loading method
            //     loadchats();
            // }
        };
    }

    componentDidMount() {
        this.loadchats();
    }

    loadchats = () => {
        this.setState({ loading: true }, () => {
            const { offset, limit } = this.state;
            axiosInstance
                .get(
                    `http://127.0.0.1:8000/chat/get/?limit=${limit}&offset=${offset}`
                )
                .then((res) => {
                    const newchats = res.data.chats;
                    const hasMore = res.data.has_more;
                    this.setState({
                        hasMore,
                        loading: false,
                        // chats: [...this.state.chats, ...newchats],
                        chats: this.state.chats.concat(newchats),
                        offset: offset + limit,
                    });
                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        loading: false,
                    });
                });
        });
    };
    //useWindow
    render() {
        const { error, hasMore, loading, chats } = this.state;

        return (
            <div>
                <br />
                {/* <h1>Feed</h1> */}
                <hr />
                {chats.map((j) => {
                    return (
                        <div>
                            {/* <Container> */}
                            {/* <p>feed</p> */}
                            <Post feed={j} key={j.id} />
                            {/* </Container> */}
                        </div>
                    );
                })}
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                {!hasMore && <div>you have reached the end</div>}
            </div>
        );
    }
}

export default InfiniteResults;
