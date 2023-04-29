import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';



import { checkImageURL } from '../../../../utils';

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
        <Image 
          source={{uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGQB_hmUVkx0HNjVmAKctp_E1gET48ocWSiKm&s=0" }} 
          resizeMode="contain" 
          style={styles.logoImage} 
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}></Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default NearbyJobCard;