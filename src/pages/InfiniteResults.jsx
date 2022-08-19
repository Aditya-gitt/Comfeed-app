import React from "react";
import axiosInstance from "../axios";
import Footer from "../components/Footer";
import Post from "../components/Post";

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
            const {
                loadchats,
                state: { error, loading, hasMore },
            } = this;
            if (error || loading || !hasMore) return;
            if (
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight &&
                hasMore
            ) {
                loadchats();
            }
        };
    }

    componentDidMount() {
        this.loadchats();
    }

    loadchats = () => {
        this.setState({ loading: true }, () => {
            const { offset, limit } = this.state;
            axiosInstance
                .post(
                    `http://127.0.0.1:8000/chat/get/?limit=${limit}&offset=${offset}`,
                    {
                        user_id: JSON.parse(localStorage.getItem("author_id")),
                    }
                )
                .then((res) => {
                    const newchats = res.data.chats;
                    const hasMore = res.data.has_more;
                    this.setState({
                        hasMore,
                        loading: false,
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
    render() {
        const { error, hasMore, loading, chats } = this.state;
        return (
            <div>
                <br />
                <hr />
                {chats.map((j) => {
                    return (
                        <div key={j.chat_id}>
                            <Post feed={j} key={j.id} />
                        </div>
                    );
                })}
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div>}
                {!hasMore && <Footer></Footer>}
            </div>
        );
    }
}

export default InfiniteResults;
