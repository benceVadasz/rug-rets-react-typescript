import React, {Component} from "react";
import * as DS from '../styles/DesignDetail.styles';
import {withFetch} from "../HOC/withFetch";
import {lightOrDark} from "../util/colorChecker";
import Loading from "../util/Loading";
import axios from "axios";

interface IHooksHOCProps {
    data: any;
    fetchData: (url?: string | undefined) => Promise<void>;
    id: { id: string }
}

type State = {
    design: { imageUrl: '', title: '', userName: '', colors: [] },
    loading: boolean,
    copied: string
}

class DesignDetails extends Component<IHooksHOCProps, State> {


    constructor(props: IHooksHOCProps) {
        super(props);
        this.state = {
            design: {imageUrl: '', title: '', userName: '', colors: []},
            loading: true,
            copied: ''
        }
    }


    async componentDidMount() {
        const id = this.props.id.id
        const {data} = await axios.get('https://www.colourlovers.com/api/pattern/' + id + '?format=json')
        this.setState({design: data[0]})
        this.setState({loading: false})
    }


    render() {

        const copy = (event: React.MouseEvent<HTMLDivElement>, color: string) => {
            navigator.clipboard.writeText(`#${color}`)
            this.setState({copied: color})
            setTimeout(() => {
                this.setState({copied: ''})
            }, 2000)
        }
        if (this.state.loading) {
            return <DS.Wrapper><Loading/></DS.Wrapper>
        }
        const {design} = this.state

        return (
            <DS.Wrapper>
                <DS.Paper style={{backgroundImage: `url(${design.imageUrl}`}}>
                    <DS.Text color={"white"}>{design.title}</DS.Text>
                </DS.Paper>
                <DS.Text color={"#444444"}>Author:</DS.Text>
                <DS.Text color={"black"}>{design.userName}</DS.Text><br/>
                <DS.Text color={"#444444"}>Colors:</DS.Text>
                <DS.ColorContainer>
                    {design?.colors?.map((color: string) => <DS.ColorBox
                        onClick={(e) => copy(e, color)}
                        color={`#${color}`}
                        tone={lightOrDark(color)}
                    >
                        <DS.Hex>{this.state.copied !== color ? `#${color}` : 'copied'}</DS.Hex>
                    </DS.ColorBox>)}
                </DS.ColorContainer>
            </DS.Wrapper>
        )
    }
}

export default withFetch(DesignDetails);