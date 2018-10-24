
export default {

    data(){
      return{
          author:'job'
      }
    },
    render(){
        return(
            <div id="footer">
                <span> written by {this.author}</span>
            </div>
        )
    }
}
