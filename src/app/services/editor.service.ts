import { Injectable } from '@angular/core';
import { Nodule } from '../models/nodule.model';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor() {}

  public getEditorText(nodules: Nodule[]): string {
    return (
      this.getHeading(nodules) +
      this.getImages(nodules) +
      this.getNoduleData(nodules) +
      this.getRecommendation(nodules)
    );
  }

  private getHeading(nodules: Nodule[]): string {
    return `
    <h2><u>Nodule Analysis</u></h2>
    <div>There is a total of ${nodules.length} nodules detected in the lung.&nbsp;</div>
    `;
  }

  private getImages(nodules: Nodule[]): string {
    let content = '<div>';
    nodules.forEach((nodule) => {
      content += `<u><img src="${nodule.imgURL}"/></u> `;
    });
    content += '</div><div><br /></div>';

    return content;
  }

  private getNoduleData(nodules: Nodule[]): string {
    let content = '<div>';
    nodules.forEach((nodule) => {
      content += `
        <div>
          A <em>${nodule.type}</em> nodule was seen in the <em>${
        nodule.lobe
      }</em> lobe. It has
          a diameter of <strong>${
            nodule.size
          } mm</strong> and a volume of
          <strong>${nodule.vol} ml</strong>. It is <em>${
        Number(nodule.cal) < 5 ? 'non-calcified' : 'calcified'
      }</em>.&nbsp;
        </div>
      `;
    });

    return content;
  }

  private getRecommendation(nodules: Nodule[]): string {
    return `
      <blockquote>
          <strong>Recommendation: </strong
          ><u
            >Follow-up in 3-6 months recommended. Subsequent management based on most
            suspicious nodule (Fleischner Society 2017)</u
          >
      </blockquote>`;
  }
}
