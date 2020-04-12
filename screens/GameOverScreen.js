import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUVFxUVFRcVFRUVFxUXFRUXFhcVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEQQAAIBAgMEBwYEAgUNAAAAAAABAgMRBCExBRJBUQYiYXGBkbETMqHB0fBCQ1LhFBUkYoKSsgcWFyMzNFNyc6Kz0vH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRAzESIRNRBEEiMhRhcf/aAAwDAQACEQMRAD8A8U9q+bO9rLmxhwih/tZc2d7WXNjBQGScFV3ZXNBQxfEzmFgm8y8UIxhqc+ZKzowtljWxScdRcDiYIzUcRK75B6FR3VzPxUa+S2bKliI21FruMrZlBTqiyqvmZeI6Vn60XFSnHVPMJgMS02jP1a75htnVpOQni6F5U2apVE8w3tymnXcVdkanj22ZcDVSVmllUAqoQKOKdglGrdkcWdCaLShhXN5E3+SVdbFjsaj7Knvy1lmlyRa0do00s2jnnkp0iW39Gbo7HqN2eRKfR6o1lZly66qe6vEsMPPdiOE72TKUkZD+VVY6xBzw8o6o1lbEIiOum7WE8qGmygUWuAqXE0tKnGWVlYfW2PHdyt4lxfITyVsyk2BnIua2yZapp9iKnEYdxeY7NE0yHIbYfKByiOywMoCJhrAKkLMLARg5BkhHAB0RnG5Bx2E34tcSfNbomT0KTa7RLSapmIxOwKid0yHLZ9dZZ+Z6HOhcjSwjOmPypfZyS+DjeujzQ41seg9V/i+ARdA6lr7/AMDt80PZ5Pin6MecbWP+T6p+v4Dv9Hk/+J8BeeHsfin6M/sXC76btexaT2a7+6/I13Rjo6sMmpPeu73LuWGg3oc08tydHRCFLs85WzeG78CPjsJutZHp9PAwb90zu38DCVTTQzeWjbHi5SoyVCmwvsS8pbMjYR7NV9RedHR/HKCrh2Do1p09DQVNnrmDhspMfmQfxmVtfFzqKzVguHoZFstnJBv4RWM3l9GscFETDwyLjo7s11qvKMetJ9nLvYGnh1Y0vR6LhRqWTvJr4L/6Zyn0OUaQzbOIlJ2i0kuelhux4p5T6z4PgPp4eUnedlFO+l7+IuKvluq3ic/RN/RdLEwjpZfMi4vaV/dKqCekm7enaFg7ZkttgkkTqTbV2+foBSd2wVTE5K3cLGu2tctO8VFWS8JjrOxbPFtxaWtjJY6bXW0H4PbVtRq0KUb7LrDVJcSW6EZ+8k+0psbtF7u/GN+fcJhts34k04sf7ITbeA3M0sipSsbLD0o4lbjdr8eJVbX6NVaScl1481qu9HTFOSsUciT4t9lDOIxq6CaDZKwjcjpWOQaSGSGAOpFDIUkEmhsboY2O3AcpBYysOdgJL6WHyyHOhZEGHSOjyl5HT6RUXwl5Gx5nGXosEklcdCN8ys/n1HJWl5D1t+l+mXkDDhL0TdzkNjSeZF/zgpr8EvI6XSKGVqcn4BY+EvRYwhuptmSx95Tb7S2xO1alRZR3V8SsauZTkjr+PicW2wNJMc4D5RF3SLOuiNOnmPooOrWyAT1DYUGcRHDI6gsg7VkIQOnA3NCCo0lFK+WfaZHZ1O9SKfNGo2jUsmOujmzvtIh4zFp9hX1MRFZa+ViLLE3k1fLtA1MbbgvvuIoSRMlN9/Zy7iPVxa5u9yrq7T5q3MbCtfO67nxDiyiy/iH2Za+tgX8RLnlkRXiUnZPXhr4fudVrXXby+vMfECdKs5a2yIdR53+/ABSq3955cF9R/Wv2BVDLTBY1Nbrlk+GhQ42o6NTdi01ws7kyMmnlp22S+AuPwrlG6V3zKVEaZpug+OcpwTPSJZnmPQKj/rU2tD0eUjo+P0mc3yP2MT0r2UqU9+K6kuHJmesei7ZpqpSlHXK670efOOZGWNPo6fjz5RpgHlqJOAacRhkdIDQ6SzCSiNGA1xGSiOTHIZI3d5JDlC/BB4U+aEUbCYhvs1fuFULsfCISnHiIY1wB1FmSLZg3G7JKOqWUWQKF2Stou1kgOFGtDOlqOkshzjmE3FYAISQkgsoiRgMLH0kHayEhDINTjwsITY7CR60XbiXW1pZa8Coov1LHaTUoq3FFLRzZtoyG0Fm3fMr6dSpJ2XAu8Xgd7UptqUXSozcHaSWRUFboiUqRFxKlezXkQ61aUXxM2sfVjNPfbzvnndXNVJOtTjPc3bq+fHuOqeHx1ejDFnWSwdLHvi7a5k2htRJWd2/XxKaFGTdrMNiKtOlHOWfJZsh40+kbcq7ZZU8Wr5ruJ6qJq6s/F/aMlhsdGo0k7crlnRxEovd+JE8LRUMilovKd7l7gIXVnxM7gnezNNhFZIwaKkXvRSgo1JJcFfzNROsVOw6W7BytnK3kvtkqpI6saqJyTdyEr1jF4ug03fndGirVOtYpa8r3T55dhGU3+P02VybBzyD1IpcQUlcwOxDAchyFkhjByQOLDxG7iGSTFEduXHtWy5CoRIP2edgzgPpI5ksoDbUHTXEJV0GW0CgG1IXzGRpIKuQsogURWPjqM9nmPsOhWDlBLRiUo3Y5xzD0ogFjUrD4rPI5RzFSswEOitSbGpvQS4xIUHmLGVmNdETjyQ2sQamGU7qWjJuJTSvZ2ej7gNLMpHOQNjdC6G/7R3lbRcuTZ20do0KU3TSu1dOySt5s2GAqwhB9x410uco4qpPPdcm4vVWlbLzudMIPJ+zOeU1DSNjglQqvdV78mrSz001KDpd0YlFOrBt5Zq2eRJ/yd7PlUqKo21GLbzum2+CzzRuOkM1Fbtk0+PIl3hlaLtZVTPEcBgZzmsna+tnlY2NPBqRPlhUr2Q+lTsPLm5lYcKxoZhKdnZmr2ZQct1a5/Ao6NHeeSNds2huRV9TCKtmk3SLyMrRsuGhGqYjIZGtk7lNWxvab2c6iWEZXkys2guKJmAbumyNio+8u2/mZTN8XTKuaAxnYk2ATiZHWLOHE6J1KXA6UbCGNnEYwzzAuDGhFhKOYSMBYhKaBki2yOUByQk5WJGiPWQJRsrjpybYlbKyHQWdHUcxts0EaChkewKommSkr3BVH2jAZCJJjEFTiHSyEANI612PgrjYsAEjqJHNofHQWEbyQAWNahF0oRff5t5mfxNBwdr5cGXuLnbdXJIqMZUudPFNHDfbItTFTccrMyO1qFWMr7ild9rff3mmqxTzTsyPNN8Uxwk4hKCkJ0X2g6StNNd/2uRosXtCEo9Z3XZl5WM85u1t1HR7bEylyZUYUEk7u6Hxp8WwSqpHQk2yVEuy1wL6ySNLv3Rl9ne9fkX0J5FmUgmOr7kJSfBGXw+LU5a5K3iWHSer/AEdpPVpeGvyM3sTqjBaPRsHFSiuwrcVK+9bhdfENsjEZLmRMTPrzXG78jOeisS7ZDlpfmAmg05eQ2xkdgDQJe6GziJHIAOi7BUMaH7ogJyCUlkD1yHu4yBzYKYRsZvXWYhgYrMHPN3DIVQGAG3ENwEnAc1kA0CpfMZUsslxDQyzBcbgAtIK9AdILbIGALftoOlNPPRrUHNZDktHzyALFT1OjqhFCzCQWYCJG1n1YP+qjPTq31L/ayyS5JehmcTkdC0cS2OqLiiLMWnW4MRyTYywUmJviTauLAB0OhAkxdl2gVI6M8wGW+AyLVVLIpcPWRPptvQRLIfSCunFR8SnwMlckbWqpyuwGGhd5IANVsipmreIuJzm2ubS7TtixStdZjMVB78r6Ju1jKei8W2R7iqXDidUjfNA7XIOkdUjxBsWEmdOIwEi75CggtxNAmS3NrjmKpvLMFFcQu7p2IoyFnN55jIN6XHKD1OivUBjqaD2GUoj75ksoRxGyjqEVxtRAAKWSIs3mTKhX1pZlRQmSKUg7eRFoPIk3yE0NM5LIFa3G6+KCRtzs+Akr8hAK2OeoxfsLKdswANth38kZvEt3LraFa8VLmigxEzoRxVRBrtrNDI1G12jpK4jk4RlOKu0rpcyqKsHCQT2hQrbcr502nck4PaLk80U8bWwWRMuYhIp3BUXxWZKpEFEvCQ5mg2dg7q75WKnBLtRp8FoIiTMDtONqjWtmPwla3AJ0ihavO3P5IiYKMnwB6HZptjtuSbH4ipeT7x2yI5q6aXzIuLnuzaf6mjKXZpifZJg1bMDWVs1oxkqicfL9xFLLJPdISOk6/Ec2mAbt3CqovAdCs6pERSCS0BOwwNF0c2G8SpSc92EXa9t5t62Svyt5l0ujVJfmT8or6knoRhvZ4GkuM96o/wC221/22LScczs8UUeU/kTbtOiih0boL8VV/wBqP/qEj0fw/Kb75r5ItnERIPHH0T5p+yvhsbDr8t+M5fJj47MoL8peLm/mTbC2Hwj6F5J+2RY4OktKVP8Aup+o9UYLSnTX9iH0DWOsPivQuT9jVK2ll3JL0I+3Gnha7mt7dpuSvnZrRrkSrETbf+6Yr/o1H5RbHRN07PMVtRL8D8yVgcf7RtbtrK+t+JQk/Yn+0f8Ayv1RnkwxUW0dOLPNzSbL6EE4sbJ5BIvqvtItSXwONI9BnSnqClLIRPXvH0qbk1FK7fAqiWxcfdUoX4p+uRnK7dzYbZoOEIq17L4mUxNndmiZy3btERRCSh1e8Wn3Dq2hVlxXZW4rDJrRFbQjuTaa1LqRExNBStbVegJ/Ro1fZMwK6rz4kuiiDsxvOL5XJkXYGZPZaYOuku0u8BiebM3h5IuNnZvImxNFDt/FReJnHeSatx7NAuzaysry8jN7bpRnWqXX4pd+pA/hZpWjVklwSNKi0Jwl9dnqGD2rSh1pS7r8Stxlbfcpc5XRjtmYSUpJTnKVuenkaunDKxlKl0jbFBrtkim015eoaDTS61kl8yJQ18H6IkxWSXNS+BmzZM6S8fRgXEdGPJPw+g/Xv9QGNpSs7eQsoiX07B7vwAD1mjRUIwprSEYxXdFJfISsgr1Emro9E8QjoXdOiP3RDGJC2F3RVEAG2EsEVN9o+NB8mArI8kQduRvhMUueHrf+NlnWpNEbEU96nVj+qnUj5xaAZ4hBk/ZDtUV+T9L/ACIFF5LuRMwL68fH/Cysi/FjxOpr/TQTqZeJEdTNrvCzeS7yO+fJnnpHqtj4Ms9j1FFTm+CsvHUrIPNlbtnavsYS1aeWXPmUlbojJ+rLrHbVc1mr8nfh3FFWsyrXSKM4q0tElnk/IF/NI7u85LXLNcDTxs5VJFlvRQOrK5nMZtlydoacw2H2jJWvmivG0jSM0WtQGkdGqpK6B1p7se0mjayZh6iU0ueQXfzfYVOyFvVo3fFvyRof4LefJCkqMm7YzD3bNFs+WhX4fApZX5ZW8C7wWFSS9TOxNo8427eNepl+JgqRYdI6f9IqLt7Aez6Cb3noU30dMdEzZ1KyvbUsUCig3D74kFsTR/fELh5tW7H6oDLnyH73yfkDJJFOWufP4MbLJ6v5/uMpPrPtv6D53fjbXtQihft/UbvNZCJNOzHxAD2BCqJ5rV6XYh/mW7kQ6vSWu/zZeZ3WePxPXN2PYI6lNcY+aPGKu3qr1qy8yLU20+NR+Mh2Lh/Z7bLGUl+OC8UDe1qC1qw8zw2ptqHGov7xHnt2l+uPmHfoOK9nu0tv4ZfnRBS6T4RfnRPB59I6K/MQKXSej+tD/L0Koez3LEdLMG/zfJXIFbphhIKTUpSdnZbtk8uZ4vLpVR/U/BMjV+ksJpwhvNtNXaslkPjJ/Q7gvsuaLyXcScLLrx70QcPPqRfYvQfQn14v+tH1Q5Lpig6kjTW08WMqS1HVHknyAVpZ/E4Ej1hatS1yrxlJTTUle/7kirVvf75AHL78xpCszeK6Pwzay7CoeCS4G2SumZ3G0d2TXb9TaOSWrM5Y47or1TsPHyV0CWWXkUnZLVEvC4jdZ1WvvMBSjd2JlLDoTaQ0mxuz8QoVIybsk8/Q16qy6u7Jc12mVrUFZq2pDeNr01Fe9GP97MXUyMkGjaVMXVgruULZZ30du3Utdm42bs3KLeV7ZHnEtuTkrezbs07W9ewn4ba9VvK8O15+HYKWOkRC5Mttsy9riJyXO2XZlcLThupJAcFTazfj9Q7Oduz0EqRJ3shykDp6A6qsNITJMXe/adFkGFRp/ehMWo2qJJEVmn4eX7D3lbw+Emh0IZW+/v8AYZLPxX38U/MgsZNpWyd3y7+KFiLHWL+7P9/UFXykx1YEORAxuhxx2o8j6M5jdSrrHHHRE55ESoBOONkZMchUKcDBCh8D73gKcJjWzbYb3I9yCQ1XevVHHHO9HRHaNI/c8gOI+/JnHHAj1mQeY3l98WccMSG09GUu1feXcccEdg9FYvoDqarvOON0ZvQbDak+P1OOM57LgLW+/gRK2n3yRxxMTRg1qScPoccU9Eo0VD3F3L5jnwOOOdbNWOpfQfW4HHFolkWWpOhpHw9BDhvQlssKf35oD9fmjjjMtjF7vhL/ABI7Fe8ccUtiej//2Q=='}}
                    style={styles.image}
                    resizeMode="cover" />
            </View>

            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default GameOverScreen;