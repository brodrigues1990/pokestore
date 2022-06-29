import axios, { AxiosInstance } from "axios";
import IPokemonDetalhe from "./PokeApiInterfaces";

export default class PokeApi
{
    // private lastResult: any;

    private http : AxiosInstance;
    lstPokemon: IPokemonDetalhe[];
    lstTipos: string[];

    constructor(){
        this.lstPokemon = [];
        this.lstTipos = [];

        this.http = axios.create({
            baseURL: "https://pokeapi.co/api/v2/",
        })
    }

    async getLista() : Promise<IPokemonDetalhe[]>
    {
        const res = (await this.http.get<ApiResponseLista>("/pokemon")).data;

        for(let i = 0; i < res.results.length; i++)
        {
            const item = res.results[i];
            const pokemonDetalhe = (await axios.get<IPokemonDetalhe>(`https://pokeapi.co/api/v2/pokemon/${item.name}`)).data;
            pokemonDetalhe.price = Math.floor(Math.random() * 100);
            this.lstPokemon.push(pokemonDetalhe);

            pokemonDetalhe.types.forEach(item => {
                const typeName = item.type.name;

                if(typeof typeName === "string" && typeName.trim().length)
                {
                    if(this.lstTipos.indexOf(typeName) < 0)
                    {
                        this.lstTipos.push(typeName);
                    }
                }
            })
        }

        return this.lstPokemon;
    }

    filterFromCacheByType(type: EPokemonType)
    {
        return this.lstPokemon.filter((item) => 
             item.types.some((tipoPoke) => tipoPoke.type.name == type)
        );
    }
}

export enum EPokemonType {
    water = "water",
    fire = "fire",
    grass = "grass"
}

export interface IPokemonItem 
{
    name: string;
    url: string;
}

export interface ApiResponseLista {
    count: number
    next: string
    previous: any|null
    results: IPokemonItem[]
}