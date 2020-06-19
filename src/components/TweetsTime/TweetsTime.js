import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, CircularProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import moment from 'moment';
import 'moment-timezone';
import { getTweetCreatedTime } from '../../apis/twitter';
import { extractTweetId } from '../../utils/helpers';
import { ALL_CITIES } from '../../utils/const';

function TweetsTime() {
  const filterOptions = createFilterOptions({
    limit: 5,
  });
  const [displayLocation, setDisplayLocation] = useState('');
  const [displayDateTime, setDisplayDateTime] = useState('');
  const [displayTimezone, setDisplayTimezone] = useState('');

  let values = {
    link: '',
    location: {
      city: '',
      city_ascii: '',
      lat: null,
      lng: null,
      pop: null,
      country: '',
      iso2: '',
      iso3: '',
      province: '',
      state_ansi: '',
      timezone: '',
    },
  };
  return (
    <div>
      <Formik
        initialValues={values}
        validate={(values) => {
          const errors = {};
          if (!values.link) {
            errors.link = 'The link is required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const tweetId = extractTweetId(values.link);
          const createdAt = await getTweetCreatedTime(tweetId);

          const targetTimezone =
            values.location.timezone || 'Atlantic/Reykjavik';

          if (values.location.timezone === '') {
            setDisplayTimezone('UTC');
            setDisplayLocation(`You did not select a location`);
          } else {
            setDisplayTimezone(targetTimezone);
            setDisplayLocation(
              `${values.location.city}, ${values.location.province}, ${values.location.country}`
            );
          }

          const timeLocale = moment(createdAt)
            .tz(targetTimezone)
            .format('dddd, MMMM Do YYYY, h:mm:ss a');

          setDisplayDateTime(timeLocale);
        }}
      >
        {({ setFieldValue, submitForm, isSubmitting, resetForm }) => (
          <Form>
            <Field
              component={TextField}
              name="link"
              type="text"
              label="Link"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '10px' }}
            />
            <Autocomplete
              id="location"
              name="location"
              freeSolo
              options={ALL_CITIES}
              getOptionLabel={(option) => {
                if (option.city !== '') {
                  return `${option.city}, ${option.province}, ${option.country}`;
                }
                return '';
              }}
              filterOptions={filterOptions}
              value={values.location}
              onChange={(e, value) => {
                setFieldValue('location', value);
              }}
              renderInput={(params) => (
                <Field
                  component={TextField}
                  {...params}
                  name="location"
                  label="Location"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            {isSubmitting && <CircularProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              style={{ marginRight: '10px' }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="default"
              disabled={isSubmitting}
              onClick={() => {
                resetForm();
                setDisplayDateTime('');
                setDisplayTimezone('');
                setDisplayLocation('');
              }}
            >
              Clear
            </Button>
          </Form>
        )}
      </Formik>
      <p>The selected location is:</p>
      <h2>{displayLocation}</h2>
      <p>The Timezone of this location is:</p>
      <h2>{displayTimezone}</h2>
      <p>The local time of this tweet is: </p>
      <h2>{displayDateTime}</h2>
    </div>
  );
}

export default TweetsTime;
