import { REQUEST_URL } from './../constants/config';
import { Component } from 'react';

import default class SearchAportes extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      	movies: null,
    	};
  	}

  	componentDidMount() {
   		this.fetchData();
  	}

  	fetchData() {
    	fetch(REQUEST_URL)
      	.then((response) => response.json())
      	.then((responseData) => {
        this.setState({
       		movies: responseData.movies,
      	  });
      	})
        .done();
  	}

	render(){
		if (!this.state.movies) {
      		return this.renderLoadingView();
    	}

    	var movie = this.state.movies[0];
    		return this.renderMovie(movie);
  		}

		renderLoadingView() {
    		return (
      			<View style={styles.container}>
        			<Text>
          				Loading movies...
        			</Text>
     			</View>
    		);
  		}

  		renderMovie(movie) {
		    return (
		      <View style={styles.container}>
		        <Image
		          source={{uri: movie.posters.thumbnail}}
		          style={styles.thumbnail}
		        />
		        <View style={styles.rightContainer}>
		          <Text style={styles.title}>{movie.title}</Text>
		          <Text style={styles.year}>{movie.year}</Text>
		        </View>
		      </View>
		    );
		}
	}
}