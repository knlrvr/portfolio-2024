import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const createNote = mutation({
    args: { 
        body: v.string(), 
        author: v.string(), 
    },
    handler: async (ctx, args) => {
        const noteId = await ctx.db.insert("notes", {
            body: args.body,
            author: args.author,
        });
    },
});

export const getNotes = query({
    handler: async (ctx) => {
        return ctx.db.query("notes").order('desc').collect();
    }
})