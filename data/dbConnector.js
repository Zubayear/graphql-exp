import mongoos, { mongo } from 'mongoose';

mongoos.Promise = global.Promise;
mongoos.connect('mongodb://localhost:27017/shows', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const showSchema = new mongoos.Schema({
    name: {
        type: String
    },
    releaseYear: {
        type: Number
    },
    episodes: {
        type: Number
    },
    cast: {
        type: Array
    },
});

const Shows = mongoos.model('shows', showSchema);

export { Shows };