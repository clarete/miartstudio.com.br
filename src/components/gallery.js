import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const importPics = (names) => names.map((n) => ({
  src: require(`../imgs/photos/${n}`),
  width: 100,
  height: 100,
}));

const SectionTitle = (props) => (
  <h2 style={{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  }}>{props.children}</h2>
);

const tattooPics = importPics([
  '0068.jpg',
  '0082.jpg',
  '0075.jpg',
  '0010.jpg',
  '0016.jpg',
  '0060.jpg',
  '0061.jpg',
  '0062.jpg',
  '0008.jpg',
  /* '0042.jpg',
   * '0043.jpg',
   * '0044.jpg',
   * '0045.jpg',
   * '0047.jpg',
   * '0049.jpg',
   * '0050.jpg',
   * '0051.jpg',
   * '0052.jpg',
   * '0053.jpg',*/
]);

const piercingPics = importPics([
  '0072.jpg',
  '0073.jpg',
  '0066.jpg',
  '0065.jpg',
  '0004.jpg',
  '0069.jpg',
  '0058.jpg',
  '0003.jpg',
  '0028.jpg',
  /* '0074.jpg',*/
]);

class LightboxGallery extends React.Component{
  constructor() {
    super();
    this.state = { currentImage: 0 };

    /* Callbacks */
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({ currentImage: obj.index, lightboxIsOpen: true });
  }
  closeLightbox() {
    this.setState({ currentImage: 0,  lightboxIsOpen: false });
  }
  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }
  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }
  render() {
    return(
      <div>
        <Gallery photos={this.props.photos} onClick={this.openLightbox} />
        <Lightbox images={this.props.photos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen} />
      </div>
    );
  }
}

export default () => (
  <div style={{ background: '#fff', paddingBottom: 20 }}>
    <Grid>
      <Row>
        <Col md={12}>
          <a id="trabalhos"></a>
          <h1 className="section-title">
            Trabalhos
          </h1>
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12}>
          <SectionTitle>Tatuagens</SectionTitle>
          <LightboxGallery photos={tattooPics} />
        </Col>
        <Col md={6} sm={12}>
          <SectionTitle>Piercings</SectionTitle>
          <LightboxGallery photos={piercingPics} />
        </Col>
      </Row>
    </Grid>
  </div>
);
