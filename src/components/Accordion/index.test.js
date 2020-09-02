import React from 'react'
import { render } from '@testing-library/react'
import Accordion from './index'

describe('Testing Accordion component', () => {
    
    it('Accordion should render the image',()=>{
        const { getAllByTestId } = render(<Accordion/>)
        const imageNode = getAllByTestId('image-accordion')
        expect(imageNode).not.toBeNull();
        expect(imageNode).not.toBeUndefined();
    })

    it('Accordion should render the pharagraph', () => {
        const { getAllByTestId } = render(<Accordion/>)

        const pharagraphNode = getAllByTestId('pharagraph-accordion')
    
        expect(pharagraphNode).not.toBeNull();
        expect(pharagraphNode).not.toBeUndefined();
        
    })
})