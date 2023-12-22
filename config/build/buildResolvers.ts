import { ResolveOptions} from "webpack"

export const buildResorves = () : ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}