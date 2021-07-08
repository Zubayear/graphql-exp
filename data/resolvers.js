import { Shows } from "./dbConnector";

export const resolvers = {
    Query: {
        getShow: ({id}) => {
            return new Show(id, showDB[id])
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

            return new Promise((resolve, o) => {
                show.save((err) => {
                    if (err) reject(err)
                    else resolve(show)
                })
            })
        },
        updateShow: (root, {input}) => {
            return new Promise((resolve, o) => {
                Shows.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, show) => {
                    if (err) reject(err)
                    else resolve(show)
                })
            })        
        },
        deleteShow: (root, {id}) => {
            return new Promise((resolve, o) => {
                Shows.deleteOne({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve('Show has been removed!')
                })
            }) 
        }
    },
};