import React, {Component} from "react";
import * as DS from './DesignDetail.styles';
import {withFetch} from "../HOC/withFetch";
import {lightOrDark} from "../util/colorChecker";
import Loading from "../util/Loading";
import {ThemeContext} from "../context/store";

type IProps = {
    data: any;
    fetchData: (url?: string | undefined) => Promise<void>| any;
    id: { id?: string } | any,
}

type IState = {
    design: { imageUrl: '', title: '', userName: '', colors: [] },
    loading: boolean,
    copied: string
}


class DesignDetails extends Component<IProps, IState> {

    constructor(props: IProps, context: typeof ThemeContext) {
        super(props, context);
        this.state = {
            design: {imageUrl: '', title: '', userName: '', colors: []},
            loading: true,
            copied: ''
        };
    }

    // componentWillMount() was deprecated in 2018, it isn’t best practice because it is not safe for async rendering
    async componentDidMount() {
        const id = this.props?.id?.id
        const {fetchData} = this.props
        if (fetchData) {
            await fetchData('https://www.colourlovers.com/api/pattern/' + id + '?format=json')
        }
        const {data} = this.props
        this.setState({design: data[0]})
        this.setState({loading: false})
    }

    copy = (event: React.MouseEvent<HTMLDivElement>, color: string) => {
        navigator.clipboard.writeText(`#${color}`)
        this.setState({copied: color})
        setTimeout(() => {
            this.setState({copied: ''})
        }, 2000)
    }

    static contextType = ThemeContext


    render() {

        if (this.state.loading) {
            return <DS.LoadingWrapper><Loading/></DS.LoadingWrapper>
        }
        const {design} = this.state

        return (
            <DS.Container dark={this.context.dark}>
                <DS.Wrapper>
                    <DS.Paper style={{backgroundImage: `url(${design.imageUrl}`}}>
                        <DS.Text color={"white"}>{design.title}</DS.Text>
                    </DS.Paper>
                    <DS.Text color={this.context.dark ? 'white' : "#444444"}>Author:</DS.Text>
                    <DS.Text color={this.context.dark ? 'white' :"black"}>{design.userName}</DS.Text><br/>
                    <DS.Text color={this.context.dark ? 'white' :"#444444"}>Colors:</DS.Text>
                    <DS.ColorContainer>
                        {design?.colors?.map((color: string) => <DS.ColorBox
                            onClick={(e) => this.copy(e, color)}
                            color={`#${color}`}
                            tone={lightOrDark(color)}
                        >
                            <DS.Hex key={color}>{this.state.copied !== color ? `#${color}` : 'copied'}</DS.Hex>
                        </DS.ColorBox>)}
                    </DS.ColorContainer>
                </DS.Wrapper>
            </DS.Container>
        )
    }
}

export default withFetch(DesignDetails)