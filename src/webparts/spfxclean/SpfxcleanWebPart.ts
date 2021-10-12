import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxcleanWebPartStrings';
import Spfxclean from './components/Spfxclean';
import { ISpfxcleanProps } from './components/ISpfxcleanProps';

export interface ISpfxcleanWebPartProps {
  description: string;
}

export default class SpfxcleanWebPart extends BaseClientSideWebPart<ISpfxcleanWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxcleanProps> = React.createElement(
      Spfxclean,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }



  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
