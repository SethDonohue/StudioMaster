export default function addTrackValidation (values) {
    const errors = {};

    if(!values.track) errors.track = 'Please select a track to upload';

    if(!values.title) errors.title = 'Please enter a title for this track';

    return errors;
}