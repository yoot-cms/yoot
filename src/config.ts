// export const apiUrl = "https://yootapi.onrender.com/"
export const apiUrl = "http://localhost:5000/"

export const types = [
    {
        name:"Text",
        description:"Will contain textual values",
        example:"Some text"
    },
    {
        name:"Number",
        description:"Will contain numerical values",
        example:"15"
    },
    {
        name:"List",
        description:"Will contain a list of values",
        example:"['Paris', 14]"
    },
    {
        name:"List<Text>",
        description:"Will contain a list of textual values",
        example:"['Paris', 'London']"
    },
    {
        name:"List<Number>",
        description:"Will contain a list of numerical values",
        example:"[12, 30.5]"
    }
]  