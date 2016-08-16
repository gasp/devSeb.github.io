var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost', function(err, result){
    if(err){
        return console.log(err);
    }

    console.log('Listening on localhost:8080');
});


/**
 * http://localhost:8080/
 *
 * https://app.pluralsight.com/library/courses/build-isomorphic-app-react-flux-webpack-firebase/table-of-contents
 * https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents
 * https://app.pluralsight.com/player?course=build-isomorphic-app-react-flux-webpack-firebase&author=hendrik-swanepoel&name=build-isomorphic-app-react-flux-webpack-firebase-m2&clip=5&mode=live
 **/