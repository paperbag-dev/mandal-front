import Block from "@domain/block/Block";
import {BlockData, GetBlockResponse} from "@domain/block/GetBlockResponse";
import React, { ReactNode} from "react";
import LeafBlockComponent from "../../components/block/leafBlockComponent/LeafBlockComponent";

interface LeafBlockData extends BlockData{
    title: string;
}

export default class LeafBlock implements Block{

    private readonly blockData: LeafBlockData

    public constructor(blockOption: GetBlockResponse){
        this.blockData = blockOption.blockData as LeafBlockData
    }

    public toString(): string {
        return this.blockData.title
    }

    public draw(): ReactNode {
        return (<LeafBlockComponent></LeafBlockComponent>)
    }
}