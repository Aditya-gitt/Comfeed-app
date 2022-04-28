import React from "react";
import axiosInstance from "../axios";
import Result from "../components/Result";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../components/Post";
import { Container } from "../components/styles/Container.styled";

class InfiniteResults extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // error: false,
            // loading: false,
            chats: [],
            count: null,
            // hasMore: true,
            more_exist: true,
            next_url: "http://127.0.0.1:8000/chat/get",
            offset: 0,
            limit: 10,
        };
        // window.onscroll = () => {
        //     console.log("Yeah its working.");
        //     const {
        //         loadchats,
        //         state: { error, loading, hasMore },
        //     } = this;
        //     if (error || loading || !hasMore) return;
        //     if (
        //         document.documentElement.scrollHeight -
        //             document.documentElement.scrollTop ===
        //         document.documentElement.clientHeight
        //     ) {
        //         // call some loading method
        //         loadchats();
        //     }
        // };
    }

    componentDidMount() {
        // this.loadchats();
        axiosInstance.get(this.state.next_url).then((res) => {
            console.log(res);
            var has_more = false;
            if (res.data.next) {
                has_more = true;
            }
            this.setState({
                next_url: res.data.next,
                // count:res.data.count,
                chats: res.data.results,
                more_exist: has_more,
            });
        });
    }

    fetchData = () => {
        axiosInstance
            .get(
                `http://127.0.0.1:8000/chat/get/?limit=${limit}&offset=${offset}`
            )
            .then((res) => {
                const { offset, limit } = this.state;
                var has_more = false;
                if (res.data.next) {
                    has_more = true;
                }
                offset: offset + limit, alert(has_more);
                this.setState({
                    next_url: res.data.next,
                    chats: this.state.chats.concat(res.data.chats),
                    more_exist: has_more,
                });
            });
    };

    // loadchats = () => {
    //     this.setState({ loading: true }, () => {
    //         const { offset, limit } = this.state;
    //         axiosInstance
    //             .get(
    //                 `http://127.0.0.1:8000/chat/get/?limit=${limit}&offset=${offset}`
    //             )
    //             .then((res) => {
    //                 const newchats = res.data.chats;
    //                 const hasMore = res.data.has_more;
    //                 this.setState({
    //                     hasMore,
    //                     loading: false,
    //                     // chats: [...this.state.chats, ...newchats],
    //                     chats: this.state.chats.concat(newchats),
    //                     offset: offset + limit,
    //                 });
    //             })
    //             .catch((err) => {
    //                 this.setState({
    //                     error: err.message,
    //                     loading: false,
    //                 });
    //             });
    //     });
    // };
    //useWindow
    render() {
        // const { error, hasMore, loading, chats } = this.state;
        return (
            // <div>
            //     <h1>Infinite chats</h1>
            //     <p>scroll</p>
            //     <hr />
            //     {chats.map((j) => {
            //         return (
            //             <div>
            //                 {/* <Container> */}
            //                 <Result feed={j} key={j.id} />
            //                 {/* </Container> */}
            //             </div>
            //         );
            //     })}
            //     {error && <div>{error}</div>}
            //     {loading && <div>Loading...</div>}
            //     {!hasMore && <div>No more results</div>}
            // </div>
            <InfiniteScroll
                dataLength={20} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.more_exist}
                loader={<h4>Loading...</h4>} //can add your custom speaner here
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>you have seen all {this.state.count}</b>
                    </p>
                }
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8595; Pull down to refresh
                    </h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8593; Release to refresh
                    </h3>
                }
            >
                <ul className="list-group">
                    {this.state.chats.map((post) => (
                        <li className="list-group-item">
                            <div className="panel">
                                <div className="panel-header">
                                    <h3>{post.title}</h3>
                                </div>
                                <div className="panel">
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
        );
    }
}

export default InfiniteResults;
