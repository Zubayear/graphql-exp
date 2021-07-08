import { Shows } from "./dbConnector";

export const resolvers = {
    Query: {
        getShow: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Shows.findById({_id: id}, (err, show) => {
                    if (err) reject(err)
                    else resolve(show)
                })
            })
        },
    },

    Mutation: {
        createShow: (root, {input}) => {
            const show = new Shows({
                name: input.name,
                releaseYear: input.releaseYear,
                episodes: input.episodes,
                cast: input.cast
            });
            show.id = show._id;

            return new Promise((resolve, reject) => {
                show.save((err) => {
                    if (err) reject(err)
                    else resolve(show)
                })
            })
        },
        updateShow: (root, {input}) => {
            return new Promise((resolve, reject) => {
                Shows.findByIdAndUpdate({_id: input.id}, input, {new: true}, (err, show) => {
                    if (err) reject(err)
                    else resolve(show)
                })
            })        
        },
        deleteShow: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Shows.deleteOne({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve('Show has been removed!')
                })
            }) 
        }
    },
};