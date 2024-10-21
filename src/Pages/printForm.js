import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { modifyUrl } from "../utils/index";
const primaryColor = "#01996D";

const PrintForm = ({ studentDetails }) => {
  const LogoUrl =
    "https://res.cloudinary.com/bilektechnologies/image/upload/v1687889327/igpcm-document/o0zbfrdl7ovferixsaoj.png";

  if (Object?.keys(studentDetails)?.length === 0) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <Image style={styles.logoImage} src={LogoUrl} />
            </View>
            <View style={styles.textHeadingContainer}>
              <Text style={styles.mainHeadingText}>
                INSTITUTE OF GLOBAL PEACE AND CONFLICT MANAGEMENT
              </Text>
              <Text style={styles.addressHeadingText}>
                Head office:Suite 311 a&b, 2nd floor, Beta foundation plaza
              </Text>
              <Text style={styles.addressHeadingText}>
                {" "}
                No:359, Ebitu Ukiwe str, Jabi, abuja
              </Text>
              <View style={styles.contactContainer}>
                <Text style={styles.infoText}>igpcminfo@gmail.com</Text>
                <Text style={styles.infoText}>|| +2347033458730</Text>
                <Text style={styles.infoText}>|| RC:1787595</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.bodyContainer,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 150,
            }}
          >
            <Text style={styles.candidateText}>
              There was an error generating your print out, contact admin
            </Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} src={LogoUrl} />
          </View>
          <View style={styles.textHeadingContainer}>
            <Text style={styles.mainHeadingText}>
              INSTITUTE OF GLOBAL PEACE AND CONFLICT MANAGEMENT
            </Text>
            <Text style={styles.addressHeadingText}>
              Head office:Suite 311 a&b, 2nd floor, Beta foundation plaza
            </Text>
            <Text style={styles.addressHeadingText}>
              {" "}
              No:359, Ebitu Ukiwe str, Jabi, abuja
            </Text>
            <View style={styles.contactContainer}>
              <Text style={styles.infoText}>igpcminfo@gmail.com</Text>
              <Text style={styles.infoText}>|| +2347033458730</Text>
              <Text style={styles.infoText}>|| RC:1787595</Text>
            </View>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.candidateText}>Basic Details</Text>
          <View style={styles.basicDetailsContainer}>
            <View style={styles.basicDetailsLeft}>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Title: </Text>
                <Text style={styles.valueText}>{studentDetails?.title}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Surname: </Text>
                <Text style={styles.valueText}>{studentDetails?.surname}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>First Name: </Text>
                <Text style={styles.valueText}>{studentDetails?.firstName}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Other Names: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.middleName}
                </Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Gender: </Text>
                <Text style={styles.valueText}>{studentDetails?.gender}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Date of Birth: </Text>
                <Text style={styles.valueText}>
                  {new Date(studentDetails.dob)?.toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Phone: </Text>
                <Text style={styles.valueText}>
                  {studentDetails?.phoneNumber}
                </Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Email: </Text>
                <Text style={styles.valueText}>{studentDetails?.email}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>State: </Text>
                <Text style={styles.valueText}>{studentDetails?.state}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Country: </Text>
                <Text style={styles.valueText}>{studentDetails.country}</Text>
              </View>
              <View style={styles.itemWrapper}>
                <Text style={styles.keyText}>Highest Qualification: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.eduQualification}
                </Text>
              </View>
            </View>
            <View style={styles.basicDetailsRight}>
              <View style={styles.studentPassportContainer}>
                <Image
                  style={styles.studentPassport}
                  src={modifyUrl(studentDetails.passport.url)}
                />
                <View style={styles.imageStamp}>
                  <Text style={styles.imageStampText}>
                    IGPCM_
                    {new Date(studentDetails.createdAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.candidateText}>Employment Details</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.colunmWrapper}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Current Work Place: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.currentEmploymet.organization}
                </Text>
              </View>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Postion: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.currentEmploymet.position}
                </Text>
              </View>
            </View>
            <View style={styles.colunmWrapper}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Date Joined: </Text>
                <Text style={styles.valueText}>
                  {new Date(
                    studentDetails.currentEmploymet.startDate
                  ).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Years of experience: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.currentEmploymet.yearsExperience}
                </Text>
              </View>
            </View>

            <View style={styles.colunmWrapper}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Office Address: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.currentEmploymet.location}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.candidateText}>Course Application Details</Text>

          <View style={styles.sectionContainer}>
            <View style={styles.colunmWrapper}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Membership: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.membershipCadre}
                </Text>
              </View>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Membership Route: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.membershipRoute}
                </Text>
              </View>
            </View>

            <View style={styles.colunmWrapper}>
              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Application. Fee: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.applicationFee}
                </Text>
              </View>

              <View style={styles.detailsWrapper}>
                <Text style={styles.keyText}>Payment Method: </Text>
                <Text style={styles.valueText}>
                  {studentDetails.paymentMethods}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            {studentDetails.academicPrograms.map((prog, index) => {
              return (
                <View key={index} style={styles.selectedprograms}>
                  <Text style={styles.selectedPrograms}>{prog.name}</Text>
                  {prog.options.map((opt, i) => {
                    return (
                      <Text key={i} style={styles.selectedOption}>
                        {opt},{" "}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.footerContainer} fixed>
          <View style={styles.printTextContainer}>
            <Text style={styles.printText}>Date Printed:</Text>
            <Text style={styles.dateText}>
              {new Date(studentDetails.createdAt).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PrintForm;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    height: 100,
    width: 100,
  },
  headerContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",

    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
  },
  logoContainer: {
    marginTop: 10,
  },
  logoImage: {
    height: 60,
    width: 60,
  },

  textHeadingContainer: {
    marginHorizontal: 10,
    display: "flex",
    alignItems: "center",
  },
  mainHeadingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: primaryColor,
    paddingBottom: 5,
  },

  addressHeadingText: {
    fontSize: 15,
    textAlign: "center",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    fontSize: 14,
    paddingVertical: 5,
    paddingRight: 4,
  },

  bodyContainer: {},

  candidateText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 18,
    color: primaryColor,
  },

  basicDetailsContainer: {
    marginHorizontal: 25,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  basicDetailsLeft: {},
  itemWrapper: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 3,
  },

  basicDetailsRight: {},
  studentPassportContainer: {
    marginRight: 30,
    marginTop: 20,
  },
  studentPassport: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  imageStamp: {
    fontWeight: "bold",
    position: "absolute",
    bottom: 1,
    opacity: 0.6,
    backgroundColor: "#f3f3f3",
    right: 0,
    left: 0,
  },
  imageStampText: {
    color: primaryColor,
    fontSize: 13,
    textAlign: "center",
  },
  keyText: {
    color: primaryColor,
    fontSize: 13,
  },
  valueText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  sectionContainer: {
    marginHorizontal: 20,
    display: "flex",
    marginBottom: 5,
  },

  colunmWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  detailsWrapper: {
    marginVertical: 3,
  },
  selectedPrograms: {
    fontSize: 14,
    color: primaryColor,
  },
  selectedOption: {
    fontSize: 12,
    paddingVertical: 2,
  },
  selectedprograms: {
    marginVertical: 2,
  },
  footerContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: primaryColor,
  },
  printTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 3,
  },
  printText: { fontSize: 13, color: primaryColor },
  dateText: { fontSize: 13, color: "#000" },
});
